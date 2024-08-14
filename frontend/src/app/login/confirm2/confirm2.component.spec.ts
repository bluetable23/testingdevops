import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirm2Component } from './confirm2.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

describe('Confirm2Component', () => {
  let component: Confirm2Component;
  let fixture: ComponentFixture<Confirm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Confirm2Component ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock data for the dialog
        { provide: MatDialogRef, useValue: {} } // Mock MatDialogRef
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confirm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
