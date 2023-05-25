import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { IContactRequest, IContactResponse } from "../../interfaces/contact.interfaces";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contact.schemas";


const createContactService = async (data: IContactRequest, userId: string): Promise<IContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const contact: Contact = contactRepository.create({
        ...data,
        user
    })

    await contactRepository.save(contact)

    return contactSchema.parse(contact)
}

export { createContactService }