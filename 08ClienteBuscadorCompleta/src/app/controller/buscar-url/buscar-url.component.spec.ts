import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarURLComponent } from './buscar-url.component';

describe('BuscarURLComponent', () => {
  let component: BuscarURLComponent;
  let fixture: ComponentFixture<BuscarURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarURLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
