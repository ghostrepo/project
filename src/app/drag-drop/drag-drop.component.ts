import { Component, OnInit } from '@angular/core';
import { ApplianceTypes } from '../app-types';

interface Appliances {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'drag-drop',
    templateUrl: './drag-drop.component.html'
})

export class DragDropComponent {
    // constructor() {  }

    selectedApp: string;

      
    appliances: Appliances[] = [
        {value: 'micro-1', viewValue: 'Microwave'},
        {value: 'fridge-2', viewValue: 'Refrigerator'},
        {value: 'tv-3', viewValue: 'Television'},
        {value: 'dry-4', viewValue: 'Drying Machine'},
        {value: 'wash-5', viewValue: 'Washing Machine'},
        {value: 'dish-6', viewValue: 'Dishwasher'},
        {value: 'oven-7', viewValue: 'Oven'},
        {value: 'tank-8', viewValue: 'Fish Tank'},
        {value: 'sink-9', viewValue: 'Sink'},
    ];
}
