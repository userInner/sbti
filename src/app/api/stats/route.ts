import { NextResponse } from 'next/server';
import { getTotalCount } from '@/lib/db';

export async function GET() {
  try {
    const total = getTotalCount();
    return NextResponse.json({ success: true, total: total || 0 });
  } catch (error) {
    return NextResponse.json({ success: false, total: 0 });
  }
}