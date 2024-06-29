import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma:PrismaService){}
  async create(dto: CreateProductDto) {
    return this.prisma.products.create({
      data:dto
    });
  }

  async findAll() {
    return await this.prisma.products.findMany({include:{Users:true}});
  }

  async findOne(id: number) {
    return await this.prisma.products.findUnique({
      where :{
        id : id 
      },include:{Users:true}
    });
  }

 async update(id: number, updateProductDto: UpdateProductDto) {
     return await this.prisma.products.update({
      where :{
        id : id
      }, 
      data : updateProductDto
    });
  }

 async remove(id: number) {
    return await this.prisma.products.delete({
      where :
      {
        id : id 

      }
    });
  }
}
