// const {prismaClient} = require('@prisma/client');

// const prisma = new prismaClient();
// module.exports = prisma;
// // This code initializes a Prisma client instance that can be used to interact with the database.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;
