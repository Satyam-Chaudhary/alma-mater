import prisma from "@/db/prisma";


export async function fetchCollegeName(query: string) {
    const collegeTitleCard = await prisma.collegeDetails.findMany({
      where: {
        collegeName: {
          contains: query,
          mode: 'insensitive',
        },
      },
      select: { collegeName : true },
      take: 3,
    });
    return collegeTitleCard;
  }