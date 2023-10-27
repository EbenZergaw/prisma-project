import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // Prisma Queries

    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: "John Doe",
    //         email: "john@email.com"
    //     }
    // })

    // Get all Users
    const users = await prisma.user.findMany()

    // Create an article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Johns first article",
    //         body: "This is johns first article",
    //         author: {
    //             connect: {
    //                 id: 1,
    //             }
    //         }
    //     }
    // })

    // Get all articles
    const articles = await prisma.article.findMany()

    // Create user and article and associate them
    // const userAndArticleCreate = await prisma.user.create({
    //     data: {
    //         name: "Sara Smith",
    //         email: "sara@email.com",
    //         articles: {
    //             create: {
    //                 title: "Sara's first article",
    //                 body: "This is sara's first article"
    //             }
    //         }
    //     }
    // })

    // Get all users and articles
    // const usersAndArticles = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // })

    // Loop over users articles
    // users.forEach((user) => {
    //     console.log(`User: ${user.name} / Email: ${user.email}`);
    //     console.log('Articles');
    //     articles.forEach((article) => {
    //         console.log(`// Title: ${article.title}`);
    //         console.log(`// Body: ${article.body}`);
    //     })
    //     console.log('\n');
    // })

    // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "John Doe Junior"
    //     }
    // })

    // Delete data
    const article = await prisma.article.delete({
        where: {
            id: 2
        }
    })
    
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1)
    })