import { IsIn, IsPositive, IsEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsEmpty()
  id!: number;

  @IsIn(['credit', 'debit'])
  type!: 'credit' | 'debit';

  @IsPositive()
  amount!: number;
}
