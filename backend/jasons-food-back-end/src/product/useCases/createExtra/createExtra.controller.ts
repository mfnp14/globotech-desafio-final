import { Body, Controller, Post } from '@nestjs/common';
import { CreateExtraDto } from '../../../product/dto/create-extra.dto';
import { CreateExtraService } from './createExtra.service';

@Controller('extra')
export class CreateExtraController {
  constructor(private readonly extraService: CreateExtraService) {}

  @Post()
  async createNewProduct(@Body() createExtraDto: CreateExtraDto): Promise<any> {
    await this.extraService.createNewExtra(createExtraDto);

    return {
      message: 'Extra cadastrado com sucesso',
    };
  }
}
