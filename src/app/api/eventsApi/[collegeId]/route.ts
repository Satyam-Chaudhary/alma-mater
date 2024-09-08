import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { collegeId: string } }) {
  const { collegeId } = params;

  if (!collegeId) {
    return NextResponse.json({ error: 'College ID is required' }, { status: 400 });
  }

  try {
    const events = await prisma.events.findMany({
      where: {
        collegeName: collegeId,
      },
      orderBy: { 
  
        id: 'desc',
      },
    });

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
