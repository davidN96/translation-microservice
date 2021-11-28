import { CacheInterceptor, Global, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheProvider } from './Cache.provider';

@Global()
@Module({
  imports: [CacheProvider],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [CacheProvider],
})
export class CacheModule {}
