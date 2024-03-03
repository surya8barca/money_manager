import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreationDialogComponent } from './table-creation-dialog.component';

describe('TableCreationDialogComponent', () => {
  let component: TableCreationDialogComponent;
  let fixture: ComponentFixture<TableCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCreationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
