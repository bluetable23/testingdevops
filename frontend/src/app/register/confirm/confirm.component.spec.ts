import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmComponent } from './confirm.component';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock data for the dialog
        { provide: MatDialogRef, useValue: {} } // Mock MatDialogRef
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
