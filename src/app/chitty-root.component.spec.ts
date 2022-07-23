import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChittyRootComponent } from './chitty-root.component';

describe('ChittyRootComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ChittyRootComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChittyRootComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chitty'`, () => {
    const fixture = TestBed.createComponent(ChittyRootComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chitty');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ChittyRootComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('chitty app is running!');
  });
});
