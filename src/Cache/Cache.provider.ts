import { CacheSettings } from 'src/Settings';
import { CacheModule } from '@nestjs/common';

export const CacheProvider = CacheModule.register({
  ttl: CacheSettings.ttl,
  isGlobal: true,
});
