import { z } from "zod"
import { userSchema, userSchemaRequest, userSchemaResponse } from "../schemas/users.schema"


type IUser = z.infer<typeof userSchema>
type IUserRequest = z.infer<typeof userSchemaRequest>
type IUserResponse = z.infer<typeof userSchemaResponse>

export { IUser, IUserRequest, IUserResponse }
