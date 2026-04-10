import { NextResponse } from 'next/server';
import { calculatePersonality, Dimensions } from '@/lib/algorithm';
import { incrementStats, getStats } from '@/lib/db';
import { PERSONALITIES } from '@/lib/data';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const dims: Dimensions = body.dims;
    const isDrunk: boolean = body.isDrunk || false;

    // 计算人格代码
    const code = calculatePersonality(dims, isDrunk);
    
    // 更新数据库统计
    const count = incrementStats(code);

    // 查找对应的人格详情
    const personality = PERSONALITIES.find(p => p.code === code) || PERSONALITIES[0];

    return NextResponse.json({
      success: true,
      data: {
        code: personality.code,
        name: personality.name,
        desc: personality.desc,
        count: count,
      }
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { success: false, message: '服务器开小差了' },
      { status: 500 }
    );
  }
}