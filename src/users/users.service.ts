import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
      include: { habits: true },
    });
  }
  
//Listar todos os usuários 
  async getUsers() {
    return this.prisma.user.findMany({
      include: { habits: true },
    });
  }

 
  async getUser(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { habits: true },
    });
  }

  //Deletar usuário
  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

//Atualizar usuário 
  async updateUser(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
      include: { habits: true },
    });
  }
}
