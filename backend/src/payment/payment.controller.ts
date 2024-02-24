import { Controller,ExecutionContext, Post, Get, Body, Res, HttpStatus, Delete, Put, Param, Injectable, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Request } from 'express';

@Controller('payment')
@Injectable() 
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  
  @Post()
  create(@Body() body: any,@Req() req: Request) {
    return this.paymentService.create(body,req);
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.paymentService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}