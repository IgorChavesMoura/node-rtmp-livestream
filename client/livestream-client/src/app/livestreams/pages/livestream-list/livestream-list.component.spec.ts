import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamListComponent } from './livestream-list.component';

describe('LivestreamListComponent', () => {
  let component: LivestreamListComponent;
  let fixture: ComponentFixture<LivestreamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestreamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
