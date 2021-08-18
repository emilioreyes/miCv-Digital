import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCityComponent } from './explore-city.component';

describe('ExploreCityComponent', () => {
  let component: ExploreCityComponent;
  let fixture: ComponentFixture<ExploreCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
