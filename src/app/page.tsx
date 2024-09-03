import CollegesHome from "./components/CollegesHome";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import prisma from "@/db/prisma";

async function fetchCollegeNames(query: string) {
  const names = await prisma.collegesName.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    select: { name: true },
    take: 3,
  });
  return names;
}

export default async function Home({ searchParams }: {
  searchParams?: {
    query?: string,
    page?: string,
  },
}) {
  const query = searchParams?.query || '';
  const collegeNames = await fetchCollegeNames(query);

  return (
    <>
      <div className="flex flex-col space-y-5">
        <SearchBar />
        {query && (
          <div className="p-4 m-5">
            <table className="min-w-full divide-y divide-gray-200 mt-4">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    College Name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {collegeNames.map((collegeName, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {collegeName.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <CollegesHome />
    </>
  );
}
