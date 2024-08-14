import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytasklistComponent } from './mytasklist.component';
import { HttpClientModule } from "@angular/common/http";

describe('MytasklistComponent', () => {
  let component: MytasklistComponent;
  let fixture: ComponentFixture<MytasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MytasklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
