
import { hashSync } from "bcryptjs";
import { IAccountRepository } from "../../Repository/IRepository";
import { ICreateAccountDTO } from "../../dto";
import { ERole } from "../../enum";
import { AppError } from "../../../../shared/service/Errors";

export class CreateAccountUseCase {
    private accountRepository: IAccountRepository;

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository;
    }

    execute({ email, password, role, userId }: ICreateAccountDTO): void {
        try {
            const emailAlreadExists = !!this.accountRepository.getByEmail(email);
            if (emailAlreadExists) throw new AppError('Email already exists');
            const userAlreadHasAccount = !!this.accountRepository.getById(userId);
            if (userAlreadHasAccount) throw new AppError('register already exists');

            const isRolesNotValid = role.some(curr => curr != ERole.deleteRegister && curr != ERole.updateRegister);

            if (isRolesNotValid) throw new AppError("'role' has invalid value");

            this.accountRepository.create({
                email,
                password: hashSync(password),
                role,
                userId
            });
        } catch (error) {
            throw error;
        }

    }
}