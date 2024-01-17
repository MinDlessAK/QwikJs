import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


interface Detail{
name:string,
email:string
}


async function set( agrs:Detail) {
  const user = await prisma.user.create({
    data:{name: agrs.name,email: agrs.email},
  })
  console.log(user)
}

async function get() {
  const user = await prisma.user.findMany()
  console.log(user)
}

  export  {set,get};