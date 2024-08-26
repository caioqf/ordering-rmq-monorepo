import { IsNotEmpty, IsPhoneNumber, IsPositive, IsString } from "class-validator";

export class CreateOrderRequest {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;
}