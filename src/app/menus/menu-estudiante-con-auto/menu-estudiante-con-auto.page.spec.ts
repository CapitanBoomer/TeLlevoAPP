import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuEstudianteConAutoPage } from './menu-estudiante-con-auto.page';

describe('MenuEstudianteConAutoPage', () => {
  let component: MenuEstudianteConAutoPage;
  let fixture: ComponentFixture<MenuEstudianteConAutoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEstudianteConAutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuEstudianteConAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
