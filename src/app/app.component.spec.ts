import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {LayoutComponent} from './modules/core/components/layout/layout.component';
import {SidebarComponent} from './modules/core/components/sidebar/sidebar.component';
import {CoreModule} from './modules/core/core.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      declarations: [
        AppComponent,
        SidebarComponent,
        LayoutComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the layout component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-layout')).toBeTruthy();
  });
});
