import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisOwnerComponent } from './regis-owner.component';

describe('RegisOwnerComponent', () => {
  let component: RegisOwnerComponent;
  let fixture: ComponentFixture<RegisOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
