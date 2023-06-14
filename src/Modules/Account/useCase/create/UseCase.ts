
import { hashSync } from "bcryptjs";
import { IAccountRepository } from "../../Repository/IRepository";
import { ICreateAccountDTO } from "../../dto";

export class CreateAccountUseCase {
    private accountRepository: IAccountRepository;

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository;
    }

    async execute({ email, passowrd, role, userId }: ICreateAccountDTO): Promise<void> {
        const emailAlreadExists = !!await this.accountRepository.getByEmail(email);
        if (emailAlreadExists) return;
        
        await this.accountRepository.create({
            email,
            passowrd: hashSync(passowrd),
            role,
            userId
        });
    }

    
}