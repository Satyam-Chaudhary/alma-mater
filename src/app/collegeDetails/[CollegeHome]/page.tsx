"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CollegeDetailsComponent from '@/app/components/CollegeDeatilsComponent'
import { CollegeDetails } from "@/app/types/types";


const Page = () => {
  const defaultCollegeData: CollegeDetails = {
    collegeDescription:
      "Manipal University Jaipur is a private university located in Jaipur, Rajasthan, India. It is a branch of Manipal Academy of Higher Education, Manipal, Karnataka. It is the fifth university established by Manipal Global Education Services. The university offers undergraduate, postgraduate and doctoral programs in engineering, management, architecture, design, and computer applications.",
    collegeName: "Manipal University Jaipur",
    numberOfAlumni: 1000,
  };
  const [collegeData, setCollegeData] = useState<CollegeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const idparam = searchParams.get("id");

  useEffect(() => {
    const getCollegeData = async () => {
      if (idparam) {
        try {
          console.log(`Fetching college details for ${idparam}`);
          const response = await fetch(`/api/collegeDetails/${idparam}`);
          if (response.ok) {
            const data: CollegeDetails = await response.json();
            console.log(data);
            setCollegeData(data);
            setLoading(false);
          } else {
            setCollegeData(defaultCollegeData);
            setLoading(false);
            console.error(
              "Failed to fetch college details:",
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching college details:", error);
        }
      }
    };

    getCollegeData();
  }, [idparam]);

  return (
    <div className="m-7">
      <CollegeDetailsComponent collegeData = {collegeData} loading = {loading}/>
    </div>
  );
};

export default Page;
