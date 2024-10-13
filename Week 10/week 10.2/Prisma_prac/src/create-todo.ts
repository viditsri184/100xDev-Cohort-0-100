import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(userId: number, title: string, description: string) {
    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        },
    });
    console.log(todo);
}

main(1, "go to gym", "go to gym and do 10 pushups")
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });