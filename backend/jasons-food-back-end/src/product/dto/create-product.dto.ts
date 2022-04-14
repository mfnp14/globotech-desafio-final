export class CreateProductDto {
  name: string;
  idRestaurant: string;
  urlImage: string;
  description: string;
  price: number;
  createdDate: Date;
  updatedDate: Date;
}
