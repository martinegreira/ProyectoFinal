import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAddComponent } from './interface-add.component';

describe('InterfaceAddComponent', () => {
  let component: InterfaceAddComponent;
  let fixture: ComponentFixture<InterfaceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
