"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { startTransition, useRef, useState, useTransition } from "react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, setIsSearching] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="flex justify-center items-center mt-16 mb-5">
      <div className="relative w-[1300px] h-[194px] flex justify-center items-center bg-gradient px-20">
        <div className="relative w-[700px] h-[55px] z-10">
          <div>
            <Input
              disabled={isSearching}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  search();
                }
                if (e.key === "Escape") {
                  inputRef?.current?.blur();
                }
              }}
              placeholder="Search Your College"
              className="rounded-full"
            />
            <Button
              onClick={search}
              disabled={isSearching}
              variant={"tertinary"}
              className="absolute right-0 inset-y-0 rounded-l-none bg-white rounded-full"
            >
              {isSearching ? <Loader2 className="h-6 w-6 animate-spin"/> : 
              <Search className="text-[#1C1B1F] h-6 w-6" />
}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
