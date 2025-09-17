import { CacheModule as NestCacheModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [
    NestCacheModule.register({
      ttl: 900000000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService, NestCacheModule],
})
export class CacheModule1 {}
