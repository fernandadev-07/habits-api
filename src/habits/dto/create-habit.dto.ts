import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateHabitDto {
  @IsNotEmpty()
  title: string;

  @IsInt()
  userId: number; // Cada hábito precisa pertencer a um usuário
}
