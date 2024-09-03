const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  // Load JSON data
  const collegeData = JSON.parse(fs.readFileSync('util/collegeData.json', 'utf-8'));

  // Iterate over the JSON data and create records in the database
  for (let college of collegeData) {
    await prisma.CollegeDetails.create({
      data: {
        Name: college.name,
        Established: college.established,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
