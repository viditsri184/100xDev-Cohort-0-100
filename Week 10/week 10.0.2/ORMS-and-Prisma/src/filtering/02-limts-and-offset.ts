import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

// equivalent query in sql
// SELECT * FROM question OFFSET 0 LIMIT 10;
// SELECT * FROM question OFFSET 10 LIMIT 10;
// SELECT * FROM question OFFSET 20 LIMIT 10;
// {offset => skip these values}
// {limit => show this many only}

async function main() {
    let res = await prisma.post.findMany({
        take: 3, // LIMIT
        skip: 2, // OFFSET
    });
    console.log(res);
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })