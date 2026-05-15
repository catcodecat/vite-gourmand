import mongoose from 'mongoose'

export async function connectMongo() {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/vite_gourmand'
  await mongoose.connect(uri)
  console.log(`MongoDB connecte: ${mongoose.connection.name}`)
}
