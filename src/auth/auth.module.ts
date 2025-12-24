import { Module, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { APP_PIPE } from '@nestjs/core';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
      })
    }),
  ],
  providers: [{
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
