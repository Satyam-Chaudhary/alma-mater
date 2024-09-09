import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { namePosition, nameCompany, smallDescription, properDescription, websiteLink, collegeName, PostedBy } = body;

  if (!namePosition || !nameCompany || !smallDescription || !properDescription) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const jobListing = await prisma.jobListing.create({
      data: {
        namePosition,
        nameCompany,
        smallDescription,
        properDescription,
        websiteLink,
        collegeName,
        PostedBy,
        
        open: true, // Assuming new job listings are open by default
      },
    });

    return NextResponse.json(jobListing, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}