import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosGridComponent } from './cursos-grid.component';

describe('CursosGridComponent', () => {
  let component: CursosGridComponent;
  let fixture: ComponentFixture<CursosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
