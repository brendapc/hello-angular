import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('taskList') || '[]');

  ngDoCheck(): void { 
    if (this.taskList) {
      
      //orders the list by checked
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      
      //localstorage
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
  }

  constructor() {}

  public deleteItem(index: number): void {
    this.taskList.splice(index, 1);
  }

  public deleteAll(): void {
    const confirm = window.confirm(
      'Tem certeza que deseja excluir todos os itens?'
    );
    if (confirm) this.taskList = [];
  }

  //creates new item
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  public validateInput(event: string, index: number): void { 
    if (!event.length) {
    const confirm = window.confirm("Task esta vazia, deseja excluir?")
      if (confirm) this.deleteItem(index)
    }
  }
}
