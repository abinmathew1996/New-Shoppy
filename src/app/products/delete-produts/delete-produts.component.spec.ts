import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdutsComponent } from './delete-produts.component';

describe('DeleteProdutsComponent', () => {
  let component: DeleteProdutsComponent;
  let fixture: ComponentFixture<DeleteProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProdutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
