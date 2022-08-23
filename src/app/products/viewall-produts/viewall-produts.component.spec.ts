import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallProdutsComponent } from './viewall-produts.component';

describe('ViewallProdutsComponent', () => {
  let component: ViewallProdutsComponent;
  let fixture: ComponentFixture<ViewallProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
