
import { hashSync } from "bcryptjs";
import { IAccountRepository } from "../../Repository/IRepository";
import { ICreateAccountDTO } from "../../dto";
import { ERole } from "../../enum";

export class CreateAccountUseCase {
    private accountRepository: IAccountRepository;

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository;
    }

     execute({ email, password, role, userId }: ICreateAccountDTO): Promise<void> {
        const emailAlreadExists = !!this.accountRepository.getByEmail(email);
        if (emailAlreadExists) return;
        const userAlreadHasAccount = !!this.accountRepository.getById(userId);
        if (userAlreadHasAccount) return;
        
        const isRolesNotValid = role.some(curr => curr != ERole.deleteRegister && curr != ERole.updateRegister);
        
        if (isRolesNotValid) return;
        
         this.accountRepository.create({
            email,
            password: hashSync(password),
            role,
            userId
        });
    }
}