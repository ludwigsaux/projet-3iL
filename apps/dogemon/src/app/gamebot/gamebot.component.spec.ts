import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamebotComponent } from './gamebot';

describe('GamebotComponent', () => {
  let component: GamebotComponent;
  let fixture: ComponentFixture<GamebotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamebotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
