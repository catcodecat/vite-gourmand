import mongoose from 'mongoose'

const statisticSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: Number, required: true },
    period: { type: String, default: 'global' }
  },
  { timestamps: true, collection: 'statistics' }
)

export const Statistic = mongoose.model('Statistic', statisticSchema)
