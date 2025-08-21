import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}
    // para criar um usuário
    async createUser(data: { email: string; name: string }) {
        return this.prisma.user.create({ data });
        // depois adicionar o relacionamento com os hábitos
    }
    // para acessar os usuários
    async getUsers() {
        return this.prisma.user.findMany();
    }

    // get de um usuário só
    // deletar usuário
    // editar usuário
}
