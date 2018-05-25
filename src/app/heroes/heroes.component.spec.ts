import { TestBed, async } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
describe('HeroesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent
      ],
    }).compileComponents();
  }));
  it('should exists', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('app');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
});
