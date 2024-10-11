import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const posts = await prisma.post.findMany({
        include:{
            author:{
                select:{
                    email:true
                }
            }
        }
    })
    console.log(posts);
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