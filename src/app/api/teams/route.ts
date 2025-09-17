import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Team from '@/models/Team';

export async function GET() {
  try {
    // Skip database connection during build time or when no MongoDB URI
    if (!process.env.MONGODB_URI || process.env.NODE_ENV === 'production') {
      console.log('Skipping MongoDB connection during build');
      return NextResponse.json([]);
    }
    
    await connectDB();
    const teams = await Team.find({}).sort({ name: 1 });
    return NextResponse.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json([]);
  }
} 