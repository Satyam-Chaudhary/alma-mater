import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const {
    nameResearch,
    smallDescription,
    properDescription,
    membersEmail,
    websiteLink,
    internshipVacancy,
    isFunded,
    collegeName
  } = body;

  if (!nameResearch || !smallDescription || !properDescription || !membersEmail || internshipVacancy === undefined || isFunded === undefined) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const research = await prisma.research.create({
      data: {
        nameResearch,
        smallDescription,
        properDescription,
        membersEmail,
        websiteLink,
        internshipVacancy,
        isFunded,
        collegeName,
      },
    });

    return NextResponse.json(research, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
