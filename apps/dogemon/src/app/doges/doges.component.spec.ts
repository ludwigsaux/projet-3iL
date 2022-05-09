import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogesComponent } from './doges.component';

describe('DogesComponent', () => {
  let component: DogesComponent;
  let fixture: ComponentFixture<DogesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
