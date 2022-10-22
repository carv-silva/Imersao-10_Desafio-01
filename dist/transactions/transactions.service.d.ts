import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Repository } from 'typeorm';
export declare class TransactionsService {
    private transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    create(createTransactionDto: CreateTransactionDto): Promise<void>;
    findAll(): Promise<Transaction[]>;
}
