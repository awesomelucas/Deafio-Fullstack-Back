import { Request, Response } from "express"
import { IUserRequest } from "../interfaces/users.interfaces"
import { createUserService } from "../services/users/createUser.service"
import { listUserService } from "../services/users/listUser.service"


const createUserController = async (req: Request, res: Response) => {

    const { email, name, password, phone }: IUserRequest = req.body
    const newUser = await createUserService({ email, name, password, phone })

    return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response) => {

    const userid = res.locals.userId
    const user = await listUserService(userid)

    return res.json(user)
}



export { createUserController, listUserController }