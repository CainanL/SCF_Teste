import { NextFunction, Request, Response } from "express";
import { validationResult, param } from 'express-validator';
export class RequestSchema {
    static requestId = [
        param('id').isNumeric().notEmpty()
    ]

    static validateRequestSchema(request: Request, response: Response, next: NextFunction) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) return response.status(400).json({ error: errors.array() });
        next();
    }
}