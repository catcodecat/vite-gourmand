import mongoose from 'mongoose'

const revenueSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    amount: { type: Number, required: true }
  },
  { timestamps: true, collection: 'revenue' }
)

export const Revenue = mongoose.model('Revenue', revenueSchema)
