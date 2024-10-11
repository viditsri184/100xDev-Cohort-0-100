import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info', 'query']});

async function main(){
    await prisma.post.create({
        data:{
            title: "Learn prisma",
            content: "Learn prisma in 1 hour",
            author:{
                connect:{
                    id: 1
                }
            }
        }
    });
}


main()
    .then(async() =>{
        await prisma.$disconnect();
    })
    .catch(async(e) =>{
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });