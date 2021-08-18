import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsInformacionComponent } from './tabs-informacion.component';

describe('TabsInformacionComponent', () => {
  let component: TabsInformacionComponent;
  let fixture: ComponentFixture<TabsInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
