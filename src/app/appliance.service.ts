import { Injectable } from '@angular/core';
import { ApplianceTypes } from './app-types';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {


  appliances = [
    {
      id: number,
      type: ApplianceTypes,

    }

  ];

  constructor() { }
}
