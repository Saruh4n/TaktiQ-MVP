import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Player from '@/models/Player';

export async function GET() {
  try {
    // Skip database connection during build time or when no MongoDB URI
    if (!process.env.MONGODB_URI || process.env.NODE_ENV === 'production') {
      console.log('Skipping MongoDB connection during build');
      return NextResponse.json([]);
    }
    
    await connectDB();
    const players = await Player.find({}).sort({ name: 1 });
    return NextResponse.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    return NextResponse.json([]);
  }
} 