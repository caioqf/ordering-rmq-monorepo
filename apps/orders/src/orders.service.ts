import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {

  constructor(
    private readonly ordersRepository: OrdersRepository
  ) {}

  async createOrder(orderRequest: CreateOrderRequest) {
    return this.ordersRepository.create(orderRequest)
  }

  async getOrders() {
    return this.ordersRepository.find({})
  }

}
