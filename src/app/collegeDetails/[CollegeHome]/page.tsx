"use client";

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

interface CollegeDetails {
    id: string;
    collegeDescription: string;
    collegeId: string;
    collegeName: string;
    numberOfAlumni: number;
  }
  
const Page = () => {
  const [collegeData, setCollegeData] = useState<CollegeDetails | null>(null);
  const searchParams = useSearchParams();
  const idparam = searchParams.get('id');
  
  useEffect(() => {
    const getCollegeData = async () => {
      if (idparam) {
        try {
          console.log(`Fetching college details for ${idparam}`);
          const response = await fetch(`/api/collegeDetails/${idparam}`);
          if (response.ok) {
            const data = await response.json();
            setCollegeData(data);
          } else {
            console.error('Failed to fetch college details:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching college details:', error);
        }
      }
    };

    getCollegeData();
  }, [idparam]);

  return (
    <div className='m-7'>
      <h1>{collegeData?.collegeName}</h1>
      <p>{collegeData?.collegeDescription}</p>
      <p>Number of Alumni: {collegeData?.numberOfAlumni}</p>
    </div>
  );
};

export default Page;
