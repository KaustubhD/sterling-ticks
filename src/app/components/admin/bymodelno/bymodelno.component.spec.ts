import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BymodelnoComponent } from './bymodelno.component';

describe('BymodelnoComponent', () => {
  let component: BymodelnoComponent;
  let fixture: ComponentFixture<BymodelnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BymodelnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BymodelnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
