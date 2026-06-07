from fastapi import FastAPI
import sqlite3
from pydantic import BaseModel

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#get
class Item(BaseModel):
    Name: str
    Cal: int
    Gram:int



#Get
def ALL_data():
    conn = sqlite3.connect("Sto_Cal.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM Data_cal")
    rows = cursor.fetchall()

    conn.close()

    return [dict(row) for row in rows]


@app.get("/")
def read_Main():
    return "ALL data API"

@app.get("/calorie")
def calorie_data():
    return ALL_data()  





@app.post("/item/")
async def create_item(item: Item):

    conn = sqlite3.connect("Sto_Cal.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO Data_cal (Name, Cal, Gram) VALUES (?, ?, ?)",
        (item.Name, item.Cal, item.Gram)
    )

    conn.commit()
    conn.close()

    return {"message": "Item added successfully"}

@app.delete("/item/{item_id}")
def delete_item(item_id: int):
    conn = sqlite3.connect("Sto_Cal.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM Data_cal WHERE id = ?",(item_id,)
    )

    conn.commit()
    conn.close()

    return {"message": "Delete success"}