"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchCollegeDetail } from '@/app/Actions/fetchCollegeDetials'; // Ensure the import path is correct
import { useRouter } from 'next/router';

interface College {
  name: string;
  description: string;
  numberAlumni: number;
  college: {
    id: string;
    established: number;
    name: string;
    detailsId: string;
  } | null | [] | undefined;
}

type CollegeData = College[];

const Page = () => {
  const params = useParams(); 
 
  

  return (
    <div className='m-7'>
      <p>This is the page for {params.CollegeHome}</p>
    
        </div>
    
  );
};

export default Page;

