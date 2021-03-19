import { ApplianceTypes } from './app-types';
import { Locations } from './app-location';

export interface ApplianceInterface {
   id: number;
   x: string;
   y: string;
   emf: number;
   type: ApplianceTypes;
   location?: Locations;
}