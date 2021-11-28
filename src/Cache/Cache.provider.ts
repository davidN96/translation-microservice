import { CacheModule } from '@nestjs/common';

export const CacheProvider = CacheModule.register({
  isGlobal: true,
  ttl: 1,
});
