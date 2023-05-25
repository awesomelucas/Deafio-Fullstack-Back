import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IContactsResponse } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entitie";
import { contactSchemaResponse } from "../../schemas/contact.schemas";


const listContactService = async (userId: string): Promise<IContactsResponse> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const contact: Contact[] = await contactRepository.find({
        where: {
            user:{
                id:userId
            }
        }
    })

    return contactSchemaResponse.parse(contact)

}

export { listContactService }