import prisma from "@/lib/prisma";


export async function fetchCollegeName(query: string) {
    const collegeTitleCard = await prisma.collegeDetails.findMany({
      where: {
        CollegeName: {
          contains: query,
          mode: 'insensitive',
        },
      },
      select: { CollegeName : true },
      take: 3,
    });
    return collegeTitleCard;
  }