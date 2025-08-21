import { IsNotEmpty } from 'class-validator';

export class CreateHabitDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  userId: number;
}
