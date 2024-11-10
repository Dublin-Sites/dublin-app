import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async create(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        await this.userRepository.save(user);
        return user;
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}
