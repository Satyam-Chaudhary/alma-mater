import { NextResponse } from 'next/server';
import prisma from '@/db/prisma';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  if (typeof query !== 'string') {
    return NextResponse.json({ error: 'Invalid query parameter' }, { status: 400 });
  }

  try {
    const results = await prisma.collegesName.findMany({
      where: {

        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
      select: {
        name: true,
        established: true,
        id: true,
      },
      take: 3,
    });

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}