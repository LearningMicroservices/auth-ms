import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { envs } from './config/envs';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot(envs.database.url), UsersModule],
})
export class AppModule {}
