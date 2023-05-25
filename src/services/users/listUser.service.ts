import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";
import { IUserResponse } from "../../interfaces/users.interfaces";


const listUserService = async (userId: string): Promise<IUserResponse> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    return userSchemaResponse.parse(user)

}

export { listUserService }