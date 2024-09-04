"use client";
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { fetchCollegeDetail } from '@/app/Actions/fetchCollegeDetials'; // Ensure the import path is correct
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
  const params = useParams();
  const searchParams = useSearchParams(); 
  const idparam = searchParams.get('id')
  console.log('searchParams:', searchParams);
  console.log('idparam:', idparam);


  useEffect(() => {
    console.log('useEffect triggered');
    console.log('idparam:', idparam);
    const getCollegeData = async () => {
      console.log("this goes here")

      if (idparam) {
        const data = await fetchCollegeDetail('Indian Institute of Technology, Bombay');
     
        setCollegeData(data);
       
      }
    };
    getCollegeData();
  }, [idparam]);

  console.log("this goes here")


 
  
  





  return (
    <div className='m-7'>
    <p> {idparam}</p>
  </div>
    
  );
};

export default Page;

