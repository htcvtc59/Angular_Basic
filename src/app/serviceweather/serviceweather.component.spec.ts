import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceweatherComponent } from './serviceweather.component';

describe('ServiceweatherComponent', () => {
  let component: ServiceweatherComponent;
  let fixture: ComponentFixture<ServiceweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
