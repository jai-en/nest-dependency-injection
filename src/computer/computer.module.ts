import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';

@Module({
  providers: [ComputerService],
  controllers: [ComputerController],
  imports: [DiskModule, CpuModule],
})
export class ComputerModule {}
