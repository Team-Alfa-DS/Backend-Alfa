/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty() 
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  iconUrl: string;
}