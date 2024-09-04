import prisma from "@/db/prisma";

export async function fetchCollegeNames(query: string) {
    const names = await prisma.collegesName.findMany({
       where: {
         name: {
           contains: query,
           mode: 'insensitive',
         },     
       },
       select: {
         name: true,
         established : true,
         id: true
       },
      
       take: 3,
     });
     
     return names;

   }