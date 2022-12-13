import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromDescComponent } from './prom-desc.component';

describe('PromDescComponent', () => {
  let component: PromDescComponent;
  let fixture: ComponentFixture<PromDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
