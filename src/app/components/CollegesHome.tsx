'use client'
import { useEffect, useState } from "react";
import CollegeCards from "./CollegeCards";
import { Skeleton } from "@/components/ui/skeleton";
 

const CollegesHome = () => {
  const [colleges, setColleges] = useState<{ id: string; collegeName: string, established: number }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCollegeNames = async () => {
      try {
        const response = await fetch('/api/home');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const fetchedColleges = await response.json();
        setColleges(fetchedColleges);
      } catch (err: any) {
        console.error("Failed to fetch college names:", err);
        setError("Failed to load college names. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getCollegeNames();
  }, []);

  return (
    <div className="m-20 space-y-5">
      <span className="text-gradient-2 text-3xl mb-4">Government Colleges</span>
      <div className="h-[360px] overflow-y-scroll p-5">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="flex flex-wrap justify-evenly gap-y-2 items-baseline">
            {loading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} className="w-[323px] h-[164px] rounded-lg bg-gray-200" />
              ))
            ) : (
              colleges.map((college) => (
                <CollegeCards
                  key={college.id}
                  college={{
                    collegeName: college.collegeName,
                    link: `/collegeDetails/${college.collegeName}?id=${encodeURIComponent(college.collegeName)}&est=${college.established}`,
                  }}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesHome;
