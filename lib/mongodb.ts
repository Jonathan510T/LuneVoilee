// lib/mongodb.ts
import mongoose from 'mongoose'

// Extend global to cache the Mongoose connection
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}

/**
 * Cached connection across hot reloads in development
 */
let cached = global.mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI
n    if (!uri) {
      throw new Error('Please define the MONGODB_URI environment variable in .env.local')
    }
    cached.promise = mongoose.connect(uri).then(m => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}
