import { Request, Response } from "express";
import { createContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { IContactUpdateRequest } from "../interfaces/contact.interfaces";
import { updateContactService } from "../services/contact/updateContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";



const createContactController = async (req: Request, res: Response) => {
    const userid = res.locals.userId

    const newContact = await createContactService(req.body, userid)

    return res.status(201).json(newContact)

}

const listContactController = async (req: Request, res: Response) => {

    const userid = res.locals.userId
    const contact = await listContactService(userid)

    return res.json(contact)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const updatedValues: IContactUpdateRequest = req.body
    const updateContact = await updateContactService(updatedValues, contactId)
    return res.json(updateContact)
    
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    await deleteContactService(contactId)
    res.status(204).send()
    
}


export {createContactController, listContactController, updateContactController, deleteContactController}
