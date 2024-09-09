import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForBloodComponent } from './request-for-blood.component';

describe('RequestForBloodComponent', () => {
  let component: RequestForBloodComponent;
  let fixture: ComponentFixture<RequestForBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestForBloodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestForBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
