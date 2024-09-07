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

export async function fetchTenCollegeNames() {
    const names = await prisma.collegesName.findMany({
        select: {
            name: true,
            established: false,
            id: true,
        },
        take: 10,
    });

    return names;
}
