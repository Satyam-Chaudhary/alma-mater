import React, { useState, useEffect } from "react";
import { CollegeDetails } from "@/app/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {NavBarCollegeDetails} from "./NavBarCollegeDetails";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CollegeDetailsProps {
  collegeData: CollegeDetails | null;
  loading: boolean;
}

const CollegeDetailsComponent: React.FC<CollegeDetailsProps> = ({
  collegeData,
  loading,
}) => {

  if (loading) {
    return (
      <div className="flex gap-16 relative">
        <Skeleton className="w-[384px] h-[225px] rounded-sm flex-shrink-0 bg-gray-200" />
        <div className="bg-slate-50 p-4 leading-7 pb-2 w-[80%] rounded-md">
          <Skeleton className="w-[400px] h-[36px] rounded-full mb-2 bg-gray-200" />
          <Skeleton className="w-full h-[20px] rounded-full mb-2 bg-gray-200" />
          <Skeleton className="w-3/4 h-[20px] rounded-full mb-2 bg-gray-200" />
          <Skeleton className="w-[180px] h-[20px] rounded-full mt-2 bg-gray-200 absolute bottom-4" />
        </div>
      </div>
    );
  }

  if (!collegeData) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <div className="flex gap-16">
        <div className="relative w-[384px] h-[225px] rounded-sm bg-gray-200 flex-shrink-0">
          <img
            src={collegeData.collegeImageLink ? `${collegeData.collegeImageLink} ` : "https://www.onlinemanipal.com/wp-content/uploads/2024/07/institute-muj.webp"}
            alt="college"
            className="rounded-sm object-cover w-full h-full"
            // layout="fill"
            // objectFit="cover"
          />
        </div>

        <div className="bg-slate-50 p-4 leading-7 pb-2 relative flex-grow rounded-md">
          <h1 className="text-3xl">{collegeData.collegeName}</h1>
          <p className="font-light mt-2">{collegeData.collegeDescription}</p>
          <p className="mt-2 absolute bottom-4">
            Number of Alumni: {collegeData.numberOfAlumni}
          </p>
          <div className="absolute right-3 bottom-3 flex items-center gap-3">
            <p className="text-sm font-thin">Student or Alumni?</p>
           <Dialog>
           <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              
              <Button>
              <Link href={"/handler/signup"}>
                Student ?
                </Link>
              </Button>
             
              
              <Button>
              <Link href={"/handler/signup"} >
                Alumni ?
              </Link>
              </Button>
             
            </DialogContent>



           </Dialog>
          </div>
        </div>
      </div>

      <div className="w-auto"><NavBarCollegeDetails/></div>
    </div>
  );
};

export default CollegeDetailsComponent;
