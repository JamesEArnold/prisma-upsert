import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedDatabase = async (): Promise<void> => {
  const seedPleaseWork = await prisma.pleasework.upsert({
    where: {
      value1_value2_value3_value4_value5: {
        value1: '4532333',
        value2: 205718310,
        value3: '45356736501',
        value4: new Date('2021-09-01'),
        value5: 8.3,
      },
    },
    update: {
      value1: '4532333',
      value2: 205718310,
      value3: '45356736501',
      value4: new Date('2021-09-01'),
      value5: 8.3,
    },
    create: {
      value1: '4532333',
      value2: 205718310,
      value3: '45356736501',
      value4: new Date('2021-09-01'),
      value5: 8.3,
    }
  });

  console.log({
    seedPleaseWork
  })
};

seedDatabase().then(async () => {
  await prisma.$disconnect();
}).catch(async (error) => {
  console.log(`Please Work Seeding Failed: ${error}`);
  await prisma.$disconnect();
})
