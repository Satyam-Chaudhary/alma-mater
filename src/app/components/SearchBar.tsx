"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { startTransition, useRef, useState, useTransition } from "react";
import { useDebouncedCallback } from 'use-debounce';

export const SearchBar = () => {
  const searchParams = useSearchParams(); 
  const pathname = usePathname();
  const {replace} = useRouter(); 

 

  const  handleSearch = useDebouncedCallback((term: string) => { 
    const params = new URLSearchParams(searchParams); 
    if(term){ 
      params.set('query', term)
    }else{
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300)
  
  return (
    <div className="flex justify-center items-center mt-16 mb-5">
      <div className="relative w-[1300px] h-[194px] flex justify-center items-center bg-gradient px-20">
        <div className="relative w-[700px] h-[55px] z-10">
          <div>
            <Input
            placeholder="Search Your College"
            className="rounded-full"
            onChange={(e) => {handleSearch(e.target.value)}}
            defaultValue={searchParams.get('query')?.toString()}
            />
            

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
