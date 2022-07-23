import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChitComponent } from './add-edit-chit.component';

describe('AddEditChitComponent', () => {
  let component: AddEditChitComponent;
  let fixture: ComponentFixture<AddEditChitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
