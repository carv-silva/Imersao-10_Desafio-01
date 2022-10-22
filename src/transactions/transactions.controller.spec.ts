import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

describe('TransactionsController', () => {
  let controller: TransactionsController;
  let serviceMock: any;

  beforeEach(async () => {
    serviceMock = {
      create: jest.fn(() => Promise.resolve()),
      findAll: jest.fn(() => Promise.resolve([])),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        {
          provide: TransactionsService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<TransactionsController>(TransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create - credit', () => {
    it("should call the service's create method", async () => {
      await controller.create({
        id: 0,
        type: 'credit',
        amount: 35,
      });
      expect(serviceMock.create).toHaveBeenCalled();
    });
  });

  describe('create - debit', () => {
    it("should call the service's create method", async () => {
      await controller.create({
        id: 0,
        type: 'debit',
        amount: 35,
      });
      expect(serviceMock.create).toHaveBeenCalled();
    });
  });

  describe('create - debito - Throw', () => {
    it("should call the service's create method", async () => {
      await controller.create({
        id: 0,
        type: 'debit',
        amount: 35,
      });
      expect(serviceMock.create).rejects.toThrowError();
    });
  });

  describe('findAll', () => {
    it("should call the service's findAll method", async () => {
      const transactions = await controller.findAll();
      expect(serviceMock.findAll).toHaveBeenCalled();
      expect(transactions).toBeInstanceOf(Array);
    });
  });
});
