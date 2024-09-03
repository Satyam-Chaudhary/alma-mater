import { Button } from "@/components/ui/button";
import Image from "next/image";

const CollegeCards = ({ college }: { college: any }) => {
  return (
    <div className="relative h-30 flex">
      <div className="w-[328px] h-[164px] flex-shrink-0 rounded-md bg-gradient-2"></div>
      <div className="absolute ml-5 w-[328px] bottom-5 flex items-baseline">
        <h3 className="font-medium text-2xl">{college.collegeName}</h3>
        <Button variant={"tertiary"} className="bg-[#5295F8] ">View More</Button>
      </div>
    </div>
  );
};

export default CollegeCards;
