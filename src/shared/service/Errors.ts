import { NextFunction, Request, Response } from "express";

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }

    static errorResponse(
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
    ) {
        if (err instanceof this) {
            return response.status(err.statusCode).json({ error: err.message });
        }
        return response.status(500).json({ error: 'Internal server error!!!' });
    }
}