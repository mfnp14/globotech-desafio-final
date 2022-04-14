import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExtraDto } from '../../../product/dto/create-extra.dto';
import { Product } from '../../../product/entities/product.entity';
import { ExtraRepository } from '../../../product/repositories/Extra.repository';

@Injectable()
export class CreateExtraService {
  constructor(
    @InjectRepository(ExtraRepository)
    private extraRepository: ExtraRepository,
  ) {}
  async createNewExtra(createExtraDto: CreateExtraDto): Promise<Product> {
    if (createExtraDto.name === '' || createExtraDto.price === null) {
      throw new HttpException(
        'Verifique se suas informações foram preenchidas corretamente',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return this.extraRepository.createExtras(createExtraDto);
  }
}
