import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controller";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contact.schemas";



const contactRoutes = Router()


contactRoutes.use(ensureauthMiddleware)

contactRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactRoutes.get("", listContactController)
contactRoutes.patch("/:id", ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), updateContactController)
contactRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController)

export { contactRoutes }