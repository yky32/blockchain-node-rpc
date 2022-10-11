import { ApiProperty } from "@nestjs/swagger";

export class CreateTransactionDto {
  @ApiProperty()
  readonly address: string;
  @ApiProperty()
  readonly amount: number;
}
