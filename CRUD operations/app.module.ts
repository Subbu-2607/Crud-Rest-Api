import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Subbu_2607:B8P0UUZzf5X6YvTa@user.irkdrol.mongodb.net/',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
