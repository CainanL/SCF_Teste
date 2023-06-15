import {
    body
} from 'express-validator';
import { RequestSchema } from '../../../shared/middleware/RequestSchema';
export class AccountRequestSchema extends RequestSchema {
    static login = [
        body('email').isEmail().notEmpty(),
        body('password').isString().isLength({min: 3, max: 50}).notEmpty()
    ]
    static create = [
        ...this.login,
        body('role').isArray({min: 0, max: 2}).notEmpty(),
        body('userId').isNumeric().notEmpty(),
    ]
}