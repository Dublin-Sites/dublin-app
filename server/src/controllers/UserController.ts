import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    constructor(private userService: UserService) {}

    async create(req: Request, res: Response) {
        try {
            const user = await this.userService.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await this.userService.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
