import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  async createHabit(@Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.createHabit(createHabitDto);
  }

  @Get()
  async getHabits() {
    return this.habitsService.getHabits();
  }

  @Get(':id')
  async getHabit(@Param('id') id: string) {
    return this.habitsService.getHabit(+id);
  }

  @Patch(':id')
  async updateHabit(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.updateHabit(+id, updateHabitDto);
  }

  @Delete(':id')
  async deleteHabit(@Param('id') id: string) {
    return this.habitsService.deleteHabit(+id);
  }
}
