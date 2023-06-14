import { NextFunction, Request, Response } from "express";
import { TRequestUserData } from "../dto";

export class PermissionRegisterValidator {

    private declarateRole: string;

    constructor(declarateRole: string) {
        this.declarateRole = declarateRole;
    }

    async hasPermission(request: Request, response: Response, next: NextFunction) {
        try {
            const { requestUserData } = request.body as TRequestUserData;
            const accountHasPermission = requestUserData.role.some((role: string) => role === this.declarateRole);
            if (!accountHasPermission) return response.status(403).json({ error: 'access denied' });
            next();
        } catch (error) {
            return response.status(403).json({ error: 'access denied' });
        }
    }
}
