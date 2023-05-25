import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contact.schemas";
import { IContactResponse, IContactUpdateRequest } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entitie";


const updateContactService = async (data: IContactUpdateRequest, contactId: string): Promise<IContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const oldContact: Contact | null = await contactRepository.findOneBy({ id: contactId })

    if (!oldContact) {
        throw new AppError("Contact not found", 404)
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...data
    })

    await contactRepository.save(newContactData)


    return contactSchema.parse(newContactData)

}

export { updateContactService }