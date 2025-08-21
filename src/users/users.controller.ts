import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    // para criação dos usuários
    @Post()
    async createUser(@Body() body: { email: string; name: string }) {
        return this.usersService.createUser(body);
    }
    // para retornar os usuários
    @Get()
    async getUsers() {
        return this.usersService.getUsers();
    }
    // get de um usuário só
    // deletar usuário
    // editar usuário
}
