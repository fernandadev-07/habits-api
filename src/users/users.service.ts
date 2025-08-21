import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Criar usuário
  async createUser(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  // Listar todos os usuários
  async getUsers() {
    return this.prisma.user.findMany();
  }

  // Pegar um usuário pelo ID
  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Atualizar usuário
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Deletar usuário
  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
