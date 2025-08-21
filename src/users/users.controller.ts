import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
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
    @Get(':id')
    async getUser(@Param ('id') id: string){
        return this.usersService.getUser(+id);
    }
    // deletar usuário
    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(+id);
    }
    // editar usuário
    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() data: {name?: string; email?: string}) {
        return this.usersService.updateUser(+id, data);
    }
}
