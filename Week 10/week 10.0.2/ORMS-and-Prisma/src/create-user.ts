import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main(){
    // ... you will write your Prisma Client queries here
    let data = await prisma.user.create({
        data: {
            email: "viditsrivastava760@gamil.com",
            name: "vidit srivastava",
        }
    });
}

main()
    .then(async() => {
        console.log("query performed successfully");
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });