import mongoose from 'mongoose'

const analyticsSchema = new mongoose.Schema(
  {
    metric: { type: String, required: true },
    value: { type: Number, required: true },
    details: { type: Object, default: {} }
  },
  { timestamps: true, collection: 'analytics' }
)

export const Analytics = mongoose.model('Analytics', analyticsSchema)
