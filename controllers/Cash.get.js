import Cash from "../models/Cash.model.js";

export const getCash = async (req, res) => {
    try {
        const cashEntries = await Cash.find({});
        if (!cashEntries || cashEntries.length === 0) {
            return res.status(404).json({ message: "No cash entries found" });
        }
        res.status(200).json({ message: "Cash entries retrieved successfully", data: cashEntries });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving cash entries", error: error.message });
    }
}