import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessComponent } from './data-process.component';

describe('DataProcessComponent', () => {
  let component: DataProcessComponent;
  let fixture: ComponentFixture<DataProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
