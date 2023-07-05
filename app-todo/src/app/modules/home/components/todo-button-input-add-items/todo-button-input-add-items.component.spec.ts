import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonInputAddItemsComponent } from './todo-button-input-add-items.component';

describe('TodoButtonInputAddItemsComponent', () => {
  let component: TodoButtonInputAddItemsComponent;
  let fixture: ComponentFixture<TodoButtonInputAddItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButtonInputAddItemsComponent]
    });
    fixture = TestBed.createComponent(TodoButtonInputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
