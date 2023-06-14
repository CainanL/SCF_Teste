import { IAccountRepository } from "../../Repository/IRepository";
import { ILoginAccountDTO } from "../../dto";
import { compareSync } from "bcryptjs";
import { IRegisterRepository } from "../../../Register/Repository/IRepository";
import jwt from 'jsonwebtoken';

export class LoginAccountUseCase {
    private accountRepository: IAccountRepository;
    private registerRepository: IRegisterRepository;

    constructor(
        accountRepository: IAccountRepository,
        registerRepository: IRegisterRepository
    ) {
        this.accountRepository = accountRepository;
        this.registerRepository = registerRepository;
    }

     execute({ email, password }: ILoginAccountDTO): Promise<string> {
        const account =  this.accountRepository.getByEmail(email);

        if (!account) return;
        const passwordMatch = compareSync(password, account.passwordEncripted);
        if (!passwordMatch) return;
        
        const register =  this.registerRepository.findById(account.userId);
        
        console.log(process.env.TOKEN_SECRET_KEY, process.env.EXPIRES_IN_TOKEN)
        const token = jwt.sign(
            {
                email,
                role: account.role,
                id: account.id,
                userId: account.userId,
                name: register.name
            },
            process.env.TOKEN_SECRET_KEY,
            {
                expiresIn: process.env.EXPIRES_IN_TOKEN
            }
            );

        return token;
    }


}