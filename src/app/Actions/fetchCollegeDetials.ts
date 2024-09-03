import prisma from "@/db/prisma";
export async function fetchCollegeDetail(ObjectId: any) {

  try {
    console.log(ObjectId)
    const collegeData = await prisma.collegeDetails.findMany({
      where : { 
        id : ObjectId,
      },
      select: { 
        name : true, 
        description : true, 
        numberAlumni : true, 
       
      }
    })

    return collegeData
    
  } catch (error) {
    console.error(error); 
    return undefined; 
  }

    
  }