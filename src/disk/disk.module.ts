import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PsuModule } from '../psu/psu.module';

@Module({
  exports: [DiskService],
  imports: [PsuModule],
  providers: [DiskService],
})
export class DiskModule {}
