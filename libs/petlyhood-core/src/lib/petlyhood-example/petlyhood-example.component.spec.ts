import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetlyhoodExampleComponent } from './petlyhood-example.component';

describe('PetlyhoodExampleComponent', () => {
  let component: PetlyhoodExampleComponent;
  let fixture: ComponentFixture<PetlyhoodExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetlyhoodExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetlyhoodExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
