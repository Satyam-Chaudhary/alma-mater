
import prisma from "@/db/prisma";

export async function fetchCollegeDetails(CollegeName : string){
    try {
        const collegeDetail = await prisma.collegeDetails.findFirst({
          where : {
            collegeName : CollegeName,
          },
          select: {
            collegeDescription: true,
            collegeName: true,
            numberOfAlumni: true,
          },
        });
        console.log('Fetched college detail:', collegeDetail);  
        return collegeDetail;
      }

      catch (error) {
        console.error('Error fetching college details:', error);
        console.log('this is error')
        return null;
      }


}