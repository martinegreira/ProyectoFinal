import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacePrincipal} from './interface-principal.component';

describe('InterfacePrincipalComponent', () => {
  let component: InterfacePrincipal;
  let fixture: ComponentFixture<InterfacePrincipal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacePrincipal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
