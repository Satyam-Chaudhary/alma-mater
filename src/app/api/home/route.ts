import { NextResponse } from 'next/server';
import prisma from "@/db/prisma";


export async function GET() {
  try {
    const names = await prisma.collegeDetails.findMany({
      select: {
        collegeName: true,
        id: true,
      },
      take: 20, 
    });

    // Return the fetched data as JSON
    return NextResponse.json(names);
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error fetching college names:", error);
    return NextResponse.json({ error: "Failed to fetch college names" }, { status: 500 });
  }
}
