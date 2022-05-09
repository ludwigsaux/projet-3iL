import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogeDetailComponent } from './doge-detail.component';

describe('DogeDetailComponent', () => {
  let component: DogeDetailComponent;
  let fixture: ComponentFixture<DogeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
