import { Injectable } from '@nestjs/common';
import { PsuService } from '../psu/psu.service';

@Injectable()
export class DiskService {
  constructor(private psuService: PsuService) {}

  getData() {
    console.log('Drawing 20 watts of power from Power Supply');
    this.psuService.supplyPower(20);
    return 'data!';
  }
}
