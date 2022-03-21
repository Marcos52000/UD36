import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoregistroComponent } from './listadoregistro.component';

describe('ListadoregistroComponent', () => {
  let component: ListadoregistroComponent;
  let fixture: ComponentFixture<ListadoregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
