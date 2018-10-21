import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPage } from './health.page';

describe('HealthPage', () => {
  let component: HealthPage;
  let fixture: ComponentFixture<HealthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
