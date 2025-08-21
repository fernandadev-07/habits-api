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
    async getUser(id: number){
        return this.prisma.user.findUnique({
            where:{ id },

        })
    }
    // deletar usuário
    async deleteUser(id: number){
        return this.prisma.user.delete({
            where:{ id },
        })
    }
    // editar usuário
    async updateUser(id: number, data:{ email?: string; name?: string }){
        return this.prisma.user.update({
            where:{ id },
            data,
        })
    }

}
