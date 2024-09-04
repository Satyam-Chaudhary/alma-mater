import Link from "next/link";

interface SearchResultsProps {
  results: { name: string; established: string; id: number }[]; // Adjust type if needed
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id} className="p-2 hover:bg-gray-100 rounded-sm">
          <Link href={`/collegeDetails/${result.name}?id=${encodeURIComponent(result.name)}&est=${result.established}`}>
                      <div>
                        {result.name}
                      </div>
                      </Link>
          <div>Est : {result.established}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
