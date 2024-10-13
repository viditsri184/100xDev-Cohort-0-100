import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const res = await prisma.user.findMany({});
    console.table(res);
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });