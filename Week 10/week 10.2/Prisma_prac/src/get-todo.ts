import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(userId: number) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
    });
    console.log(todos);
}

main(1).then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })