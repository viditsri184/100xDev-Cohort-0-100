import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(userId: number) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            userId: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

main(1).then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })