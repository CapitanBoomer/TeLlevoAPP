import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuEstudianteSinAutoPage } from './menu-estudiante-sin-auto.page';

describe('MenuEstudianteSinAutoPage', () => {
  let component: MenuEstudianteSinAutoPage;
  let fixture: ComponentFixture<MenuEstudianteSinAutoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEstudianteSinAutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuEstudianteSinAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
