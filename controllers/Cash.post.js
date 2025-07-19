import Cash from "../models/Cash.model.js";

export const createCash = async (req, res) => {
    try {
        const newEntries = Array.isArray(req.body) ? req.body : [req.body];
        if (!newEntries || newEntries.length === 0 || (newEntries.length === 1 && Object.keys(newEntries[0]).length === 0)) {
            return res.status(400).json({ message: "No cash entries provided" });
        }
        const newCash = await Cash.insertMany(newEntries);
        res.status(201).json({ message: "Cash entry created successfully", data: newCash });
    } catch (error) {
        res.status(500).json({ message: "Error creating cash entry", error: error.message });
    }
}
