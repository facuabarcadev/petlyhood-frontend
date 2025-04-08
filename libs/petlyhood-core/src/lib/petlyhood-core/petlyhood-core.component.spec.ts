import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetlyhoodCoreComponent } from './petlyhood-core.component';

describe('PetlyhoodCoreComponent', () => {
  let component: PetlyhoodCoreComponent;
  let fixture: ComponentFixture<PetlyhoodCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetlyhoodCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PetlyhoodCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
