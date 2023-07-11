import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-input-add-items',
  templateUrl: './todo-button-input-add-items.component.html',
  styleUrls: ['./todo-button-input-add-items.component.scss'],
})
export class TodoButtonInputAddItemsComponent {
  @Output() public emmitItem: EventEmitter<string> = new EventEmitter();

  public addItem: string = '';

  public submitItem(): void {
    this.addItem = this.addItem.trim();
    
    if (this.addItem) {
      this.emmitItem.emit(this.addItem);
      this.addItem = '';
    }
  }
}
