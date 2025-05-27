import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicacionComponent } from './communicacion.component';

describe('CommunicacionComponent', () => {
  let component: CommunicacionComponent;
  let fixture: ComponentFixture<CommunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
