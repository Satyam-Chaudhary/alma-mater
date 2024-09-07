'use client'
import { useEffect, useState } from "react";
import CollegeCards from "./CollegeCards";

const CollegesHome = () => {
  const [colleges, setColleges] = useState<{ id: string; name: string , established: number}[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      }
    };

    getCollegeNames();
  }, []);

  return (
    <div className="m-20 space-y-5">
      <span className="text-gradient-2 text-3xl mb-4">Government Colleges</span>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="flex flex-wrap justify-evenly gap-y-2 items-baseline">
          {colleges.map((college) => (
            <CollegeCards
              key={college.id}
              college={{ collegeName: college.name, link: `/collegeDetails/${college.name}?id=${encodeURIComponent(college.name)}&est=${college.established}` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollegesHome;
