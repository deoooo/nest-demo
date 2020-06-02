import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './entity/user.providers';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [
    UserController,
  ],
})
export class UserModule {
}
