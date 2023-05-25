import {Request, Response} from "express"
import { createLoginService } from "../services/login/createLogin.service"

const createLoginController = async (req: Request, res: Response) => {

    const {email, password} = req.body
    const login = await createLoginService({email, password})

    return res.json({login})
}

export {createLoginController}