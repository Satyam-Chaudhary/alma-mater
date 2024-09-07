import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { nameEvent, smallDescription, properDescription, websiteLink, collegeId } = body;

  if (!nameEvent || !smallDescription || !properDescription || !collegeId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const event = await prisma.events.create({
      data: {
        nameEvent,
        smallDescription,
        properDescription,
        websiteLink,
        
      },
    });

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
