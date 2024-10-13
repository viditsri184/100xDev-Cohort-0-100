import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(username: string) {
    const res = await prisma.user.delete({
        where: {username: username},
    });
    console.log(res);
}

main("vidit@gmail.coooom")
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });