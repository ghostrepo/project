import { ApplianceTypes } from './app-types';
import { Locations } from './app-location';

export interface Appliances {
   id: number;
   type: ApplianceTypes;
   location: Locations;
//    emField: ;
}