import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { ILoginRequest } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken"
import "dotenv/config"



const createLoginService = async ({ email, password }: ILoginRequest): Promise<string> => {
    const usersRepository = AppDataSource.getRepository(User)

    const user = await usersRepository.findOne({
        where: {
            email
        }
    })

    if (!user) {
        throw new AppError("Invalid credentials", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }

    const token = jwt.sign(
        { userName: user.name },
        process.env.SECRET_KEY!,
        {
            expiresIn: "10h",
            subject: user.id
        }
    )

    return token

}


export { createLoginService }