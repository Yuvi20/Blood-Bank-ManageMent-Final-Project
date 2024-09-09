import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBloodDetailsComponent } from './admin-blood-details.component';

describe('AdminBloodDetailsComponent', () => {
  let component: AdminBloodDetailsComponent;
  let fixture: ComponentFixture<AdminBloodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBloodDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBloodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
