"use client";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, KeyboardEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchResults from "./SearchResults";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasQuery, setHasQuery] = useState(false);

  const handleSearch = useDebouncedCallback(async (term: string) => {
    setLoading(true);
    setHasQuery(!!term); // 2 times as fisrst convert to boolean and then to opposite
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
      const searchResults = await response.json();
      
      setResults(searchResults);
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
        setResults([]);
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      console.error('Failed to fetch search results', error);
    } finally {
      setLoading(false);
    }
  }, 200);

  const handleBlur = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape' && inputRef.current) {
      inputRef.current.value = '';
      const params = new URLSearchParams(searchParams);
      params.delete("query");
      replace(`${pathname}?${params.toString()}`);
      setResults([]);
    }
  };

  return (
    <div className="flex justify-center items-center mt-16 mb-5">
      <div className="relative w-[1300px] h-[194px] flex justify-center items-center bg-gradient px-20">
        <div className="relative w-[700px] h-[55px] z-10 flex items-center">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={24} />
          </div>
          <Input
            placeholder="Search Your College"
            className="pl-12 rounded-full"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
            onKeyDown={(e) => handleBlur(e)}
            ref={inputRef}
          />
          <div>
          {loading && (
          <div className="absolute top-full left-0 right-0 p-4 bg-white border border-gray-200 shadow-lg rounded-lg flex justify-center opacity-80 z-10">
            <Loader2 className="animate-spin " />
          </div>
        )}
        {results.length > 0 ? (
          <div className="absolute top-full left-0 right-0 p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-10 opacity-95">
            <SearchResults results={results} />
          </div>
        ) : hasQuery && results.length === 0 && !loading ? (
          <div className="absolute top-full left-0 right-0 p-4 bg-white border border-gray-200 shadow-lg rounded-lg opacity-80 z-10">
            <p className="text-center text-gray-500">No results found</p>
          </div>
        ) : null}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SearchBar;
