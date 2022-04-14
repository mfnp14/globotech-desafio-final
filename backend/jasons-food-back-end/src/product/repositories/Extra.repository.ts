import { EntityRepository, Repository } from 'typeorm';
import { CreateExtraDto } from '../dto/create-extra.dto';
import { Extra } from '../entities/extra.entity';

@EntityRepository(Extra)
export class ExtraRepository extends Repository<Extra> {
  async createExtras(createExtraDto: CreateExtraDto): Promise<any> {
    const { name, price } = createExtraDto;

    const extras = this.create([
      {
        name,
        price,
        createdDate: new Date(),
        updatedDate: new Date(),
      },
    ]);

    return await this.save(extras);
  }

  async getListExtras(): Promise<any> {
    const queryGetExtras = await this.createQueryBuilder('extra')
      .select([
        'extra.id',
        'extra.name',
        'extra.price',
        'extra.products',
        'extra.productsExtras',
      ])
      .getMany();

    return queryGetExtras;
  }
}
