import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittyListComponent } from './chitty-list.component';

describe('ChittyListComponent', () => {
  let component: ChittyListComponent;
  let fixture: ComponentFixture<ChittyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChittyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChittyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
