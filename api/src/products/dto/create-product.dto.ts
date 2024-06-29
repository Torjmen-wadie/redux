import { ApiProperty } from "@nestjs/swagger"

export class CreateProductDto {
    @ApiProperty()
    productName: string
    @ApiProperty()
    price : number
    @ApiProperty()
    imageUrl : string
    @ApiProperty()
    category : string
    @ApiProperty()
    description: string
    @ApiProperty()
    usersId: number

}
