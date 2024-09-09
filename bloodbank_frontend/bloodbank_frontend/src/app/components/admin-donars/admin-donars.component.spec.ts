import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonarsComponent } from './admin-donars.component';

describe('AdminDonarsComponent', () => {
  let component: AdminDonarsComponent;
  let fixture: ComponentFixture<AdminDonarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDonarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDonarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
