import { prisma } from './connection'

// prisma.
type user = {    
    user_name: string,
    password: string
    email: string
}

export const saveUser = (user: user) => {
    return prisma.user.create({
        data: user
    })
}

