import { PrismaClient } from "@prisma/client";
import { emit } from "process";

const prisma = new PrismaClient({ log: [{ emit: "event", level: "query" }] });

async function main() {
    const users = await prisma.user.findMany({
        take:2,
    });
    console.table(users);
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

// if we want to look at the query params being passed to the $ in the sql command.
prisma.$on("query", async(e) => {
    console.log(`${e.query} ${e.params}`);
});