import mongoose from "mongoose";

const cashSchema = new mongoose.Schema({
    date: String,
    cash_option: String,
    description: String,
    amount: Number,
    cash: {type: String, enum: ['in', 'out']},
})

export default mongoose.model('Cash', cashSchema);
