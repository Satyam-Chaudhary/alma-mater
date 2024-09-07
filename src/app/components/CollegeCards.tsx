import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CollegeCardProps {
  college: {
    collegeName: string;
    link: string;
  };
}

const CollegeCards: React.FC<CollegeCardProps> = ({ college }) => {
  return (
    <Card className="relative w-[323px] h-[164px] overflow-hidden">
      <Image
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/iit-bombay-091918699-16x9.jpg?VersionId=AQZFnKvlj7kv8szgo5b4mMxyK5Y5a6UB&size=690:388"
        alt="college"
        className="rounded-sm opacity-85"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
        <h2 className="text-white text-xl font-bold">{college.collegeName}</h2>
        <Link
          className="inline-block bg-blue-500 text-white font-semibold py-2 px-1 text-center rounded-md min-w-[100px] shadow-md hover:bg-blue-600 active:bg-blue-700 transition duration-300 ease-in-out"
          href={college.link}
        >
          View More
        </Link>
      </div>
    </Card>
  );
};

export default CollegeCards;
