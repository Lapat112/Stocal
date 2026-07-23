import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const db = new sqlite3.Database("User.db");

const app = express();
const PORT = 8000;
const JWT_SECRET = process.env.JWT_SECRET || "dev-only-change-me"; // TODO: ตั้งผ่าน env ก่อน deploy จริง

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    const sql = `SELECT * FROM User WHERE Name = ?`;
    db.get(sql, [username], async (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(401).json({ message: "User not found" });
        }

        try {
            const passwordMatches = await bcrypt.compare(password, row.Password);

            if (passwordMatches) {
                const token = jwt.sign(
                    { username, role: row.role || 'user' }, // ใช้ role จาก DB แทนการ hardcode admin
                    JWT_SECRET,
                    { expiresIn: '1h' } // ขยายจาก 1m -> 1h แก้ปัญหา logout ไว
                );
                res.json({
                    message: "Login Success",
                    token: token,
                    id: row.id,
                    username: row.Name
                });
            } else {
                return res.status(401).json({ message: "Failed login" });
            }
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    });
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO User (Name, Password) VALUES (?, ?)`;

        db.run(sql, [username, hashedPassword], function (err) {
            if (err) {
                return res.status(500).json({ message: err.message });
            }
            res.json({ message: "User success" });
        });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token expired or invalid" });
        }
        req.user = decoded;
        next();
    });
}

app.get("/profile", authenticateToken, (req, res) => {
    res.json({ message: "Token valid", user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});