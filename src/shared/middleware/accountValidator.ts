import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TTokenVerify } from "../dto";
import { AccountRepository } from "../../Modules/Account/Repository/Implementation";

export async function accountValidator (request: Request, response: Response, next: NextFunction) {
    const authorization = request.headers.authorization;

    if (!authorization) return response.status(401).json({ error: "access denied" });

    try {
        const [, token] = authorization.split(' ');
        if (!token) return response.status(401).json({ error: 'access denied' });
        const {
            id,
            email,
            role,
            userId
        } = jwt.verify(token, process.env.TOKEN_SECRET_KEY) as TTokenVerify;
        
        const accountRepository = new AccountRepository();
        const accountValid = await accountRepository.getById(id);
        
        if (!accountValid) return response.status(401).json({ error: 'access denied' });

        request.body.requestUserData = {
            id,
            email,
            role,
            userId
        }
        next();
    } catch (error) {
        if (error == "TokenExpiredError: jwt expired") return response.status(401).json({ code: 'token.expired' });
        return response.status(401).json({ error: 'access denied' });
    }
}