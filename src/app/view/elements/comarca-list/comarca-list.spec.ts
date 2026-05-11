import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarcaList } from './comarca-list';

describe('ComarcaList', () => {
  let component: ComarcaList;
  let fixture: ComponentFixture<ComarcaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComarcaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComarcaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
