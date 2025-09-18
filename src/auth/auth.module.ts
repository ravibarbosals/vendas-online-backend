import { Module, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { APP_PIPE } from '@nestjs/core';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [{
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
