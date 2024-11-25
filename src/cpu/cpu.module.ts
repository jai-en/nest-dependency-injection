import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PsuModule } from '../psu/psu.module';

@Module({
  exports: [CpuService],
  imports: [PsuModule],
  providers: [CpuService],
})
export class CpuModule {}
