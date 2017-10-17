import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelasModalComponent } from './telas-modal.component';

describe('TelasModalComponent', () => {
  let component: TelasModalComponent;
  let fixture: ComponentFixture<TelasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
