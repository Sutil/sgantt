import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionConfigComponent } from './notion-config.component';

describe('NotionConfigComponent', () => {
  let component: NotionConfigComponent;
  let fixture: ComponentFixture<NotionConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
