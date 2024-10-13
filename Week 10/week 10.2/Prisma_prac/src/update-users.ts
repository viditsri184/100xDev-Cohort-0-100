import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

interface UpdateParams{
    firstName: string,
    lastName: string
}

async function main(username: string, {firstName, lastName} : UpdateParams) {
    const res = await prisma.user.update({
        where: {username: username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}

main("vidit@gmail.com", {firstName: "Vidit2", lastName: "Srivastava2"} )
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });