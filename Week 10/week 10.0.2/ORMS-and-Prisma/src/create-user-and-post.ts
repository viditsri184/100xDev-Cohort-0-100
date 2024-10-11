import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:
        ['info', 'query']
});

async function main() {
    await prisma.user.create({
        data: {
            email: "abc@gmail.com",
            name: "abc",
            posts: {
                create: [{
                    title: "abc title 1",
                    content: "abc content 1"
                },
                {
                    title: "abc title 2",
                    content: "abc content 2"
                }
                ]
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })