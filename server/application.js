import express from "express";
import fs from "fs/promises";
import { addContact, listContacts } from "../shared/phonebook.js";

const app = express();
const port = 4000;

app.use(express.json());

app.get("/list", async (req, res) => {
    const data = await listContacts();
    res.json(data);
})

app.post("/add", async (req, res) => {
    const { name, number } = req.body;
    const data = await addContact(name, number);
    res.json(data);
})


app.listen(port, () => {
    console.log(`Application server started at: http://localhost:${port}`)
})