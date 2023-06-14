import {
    body,
    param,
    query
} from 'express-validator';
import { RequestSchema } from '../../../shared/service/RequestSchema';
export class RegisterRequestSchema extends RequestSchema {
    static search = [query('filter').optional()]
    static findOne = [query('filter').isString().notEmpty()]
    static update = [
        param('id').isNumeric().notEmpty(),
        body('name').optional().isString().notEmpty(),
        body('job').optional().isString().notEmpty()
    ]
}