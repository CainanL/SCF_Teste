
import { hashSync } from "bcryptjs";
import { IAccountRepository } from "../../Repository/IRepository";
import { ICreateAccountDTO } from "../../dto";
import { ERole } from "../../enum";

export class CreateAccountUseCase {
    private accountRepository: IAccountRepository;

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository;
    }

    async execute({ email, password, role, userId }: ICreateAccountDTO): Promise<void> {
        const emailAlreadExists = !!await this.accountRepository.getByEmail(email);
        if (emailAlreadExists) return;
        const userAlreadHasAccount = !!await this.accountRepository.getById(userId);
        if (userAlreadHasAccount) return;
        
        const isRolesNotValid = role.some(curr => curr != ERole.deleteRegister && curr != ERole.updateRegister);
        
        if (isRolesNotValid) return;
        
        await this.accountRepository.create({
            email,
            password: hashSync(password),
            role,
            userId
        });
    }
}