import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { researchId: string } }) {
  const { researchId } = params;

  if (!researchId) {
    return NextResponse.json({ error: 'College ID is required' }, { status: 400 });
  }

  try {
    const events = await prisma.research.findMany({
      where: {
        collegeName: researchId,
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
