import { Injectable } from '@nestjs/common';
import { PsuService } from '../psu/psu.service';

@Injectable()
export class CpuService {
  constructor(private psuService: PsuService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service');
    this.psuService.supplyPower(10);
    return a + b;
  }
}
