import React, { useState, useEffect } from "react";
import { CollegeDetails } from "@/app/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {NavBarCollegeDetails} from "./NavBarCollegeDetails";

interface CollegeDetailsProps {
  collegeData: CollegeDetails | null;
  loading: boolean;
}

const CollegeDetailsComponent: React.FC<CollegeDetailsProps> = ({
  collegeData,
  loading,
}) => {
  const [delayedRender, setDelayedRender] = useState(false);

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
          <Image
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/iit-bombay-091918699-16x9.jpg?VersionId=AQZFnKvlj7kv8szgo5b4mMxyK5Y5a6UB&size=690:388"
            alt="college"
            className="rounded-sm"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="bg-slate-50 p-4 leading-7 pb-2 relative flex-grow rounded-md">
          <h1 className="text-3xl">{collegeData.collegeName}</h1>
          <p className="font-thin mt-2">{collegeData.collegeDescription}</p>
          <p className="mt-2 absolute bottom-4">
            Number of Alumni: {collegeData.numberOfAlumni}
          </p>
          <div className="absolute right-3 bottom-3 flex items-center gap-3">
            <p className="text-sm font-thin">Student or Alumni?</p>
            <Button
              variant={"tertiary"}
              className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Log In / Sign Up
            </Button>
          </div>
        </div>
      </div>

      <div className="w-auto"><NavBarCollegeDetails/></div>
    </div>
  );
};

export default CollegeDetailsComponent;
