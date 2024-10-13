import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            username:true,
            password:true,
        }
    });
    console.log(res);
}

main("vidit@gmail.coooom", "vidit2411", "Vidit", "Srivastava" )
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });