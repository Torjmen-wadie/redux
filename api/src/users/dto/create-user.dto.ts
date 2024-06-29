import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    userName: string
    @ApiProperty()
    passsword: string
    @ApiProperty()
    email: string

}
