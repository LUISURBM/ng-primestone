import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanFormComponent } from './kanban-form.component';

describe('KanbanFormComponent', () => {
  let component: KanbanFormComponent;
  let fixture: ComponentFixture<KanbanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
