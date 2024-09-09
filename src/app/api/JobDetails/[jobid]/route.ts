import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { jobid: string } }) {
  const { jobid } = params;

  if (!jobid) {
    return NextResponse.json({ error: 'College ID is required' }, { status: 400 });
  }

  try {
    const events = await prisma.jobListing.findUnique({
      where: {
        id: jobid,
      },
      select : {
        nameCompany : true,
        namePosition : true, 
        smallDescription : true, 
        properDescription : true, 
        websiteLink : true, 

      }
      
    });

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
