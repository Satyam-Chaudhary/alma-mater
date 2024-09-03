// export default async function CollegePage({ searchParams }: { searchParams: { query?: string } }) {
//   const searchQuery = searchParams.query || '';
//   const encodedSearchQuery = encodeURIComponent(searchQuery);
//   const response = await fetch(`http://localhost:3000/api/search?query=${encodedSearchQuery}`);
//   const colleges = await response.json();

//   return (
//     <div>
//       {colleges.map((collegeObj: { CollegeName: string }) => (
//         <h1 key={collegeObj.CollegeName}>{collegeObj.CollegeName}</h1>
//       ))}
//     </div>
//   );
// }
