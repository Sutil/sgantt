import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReaderComponent } from './issue-reader.component';

describe('IssueReaderComponent', () => {
  let component: IssueReaderComponent;
  let fixture: ComponentFixture<IssueReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
