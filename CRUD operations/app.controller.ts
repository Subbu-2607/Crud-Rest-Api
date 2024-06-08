import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { userUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }
  @Get()
  readUser() {
    return this.appService.readUser();
  }
  @Put(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser(
    @Param('id') id: string,
    @Body() update: userUpdateDto,
  ): Promise<User> {
    return this.appService.updateUser(id, update);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
