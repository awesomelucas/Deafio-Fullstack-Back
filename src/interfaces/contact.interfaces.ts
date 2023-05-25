import { z } from "zod"
import { DeepPartial } from "typeorm"
import { contactSchema, contactSchemaRequest, contactSchemaResponse } from "../schemas/contact.schemas"


type IContact = z.infer<typeof contactSchema>
type IContactRequest = z.infer<typeof contactSchemaRequest>
type IContactResponse = z.infer<typeof contactSchema>
type IContactsResponse = z.infer<typeof contactSchemaResponse>
type IContactUpdateRequest = DeepPartial<IContactRequest>


export { IContact, IContactRequest, IContactResponse, IContactUpdateRequest, IContactsResponse }

