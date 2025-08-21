import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  async createHabit(data: CreateHabitDto) {
    return this.prisma.habit.create({
      data: {
        title: data.title,
        user: {
          connect: { id: data.userId }, // conecta hábito ao usuário
        },
      },
    });
  }

  async getHabits() {
    return this.prisma.habit.findMany({
      include: { user: true }, // traz também os dados do usuário dono
    });
  }

  async getHabit(id: number) {
    return this.prisma.habit.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async updateHabit(id: number, data: UpdateHabitDto) {
    return this.prisma.habit.update({
      where: { id },
      data,
    });
  }

  async deleteHabit(id: number) {
    return this.prisma.habit.delete({
      where: { id },
    });
  }
}
