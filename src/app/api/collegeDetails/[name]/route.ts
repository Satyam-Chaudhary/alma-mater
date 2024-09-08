import { NextResponse } from 'next/server';
import prisma from "@/db/prisma";

export async function GET(request: Request, { params }: { params: { name: string } }) {
    const { name } = params;

    try {
        const collegeDetail = await prisma.collegeDetails.findFirst({
            where: {
                collegeName: name,
            },
            select: {
                collegeDescription: true,
                collegeName: true,
                numberOfAlumni: true,
                collegeImageLink: true
            },
        });

        if (!collegeDetail) {
            return NextResponse.json({ error: 'College not found' }, { status: 404 });
        }

        return NextResponse.json(collegeDetail, { status: 200 });
    } catch (error) {
        console.error('Error fetching college details:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
