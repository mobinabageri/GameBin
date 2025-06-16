import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModaleComponent } from './auth-modale.component';

describe('AuthModaleComponent', () => {
  let component: AuthModaleComponent;
  let fixture: ComponentFixture<AuthModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
