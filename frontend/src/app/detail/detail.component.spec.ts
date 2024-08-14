import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DetailComponent} from './detail.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

import {BackendService} from "../shared/backend.service";
import {BehaviorSubject} from "rxjs";

// Mock für den BackendService
class MockBackendService {
  getOne(id: string) {
    return new BehaviorSubject({
      aufgabe: 'Testaufgabe',
      beschreibung: 'Testbeschreibung',
      frist: '31.12.2024',
      _id: id,
      erledigt: false
    }).asObservable();
  }
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let backendServiceMock: any;

  beforeEach(async () => {
    backendServiceMock = new MockBackendService();
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule],
      declarations: [ DetailComponent ],
      providers: [{ provide: BackendService, useValue: backendServiceMock }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update form values when readOne is called', () => {
    // Spy auf die Methode getOne der Mock-Instanz
    spyOn(backendServiceMock, 'getOne').and.callThrough();

    // Aufruf der Methode readOne
    component.readOne('123');
    fixture.detectChanges();

    // Überprüfen, ob getOne aufgerufen wurde
    expect(backendServiceMock.getOne).toHaveBeenCalledWith('123');

    // Überprüfen, ob die Formulardaten aktualisiert wurden
    expect(component.form.value).toEqual({
      aufgabeControl: 'Testaufgabe',
      beschreibungControl: 'Testbeschreibung',
      fristControl: '31.12.2024',
      erledigtControl: false
    });
  });
});
