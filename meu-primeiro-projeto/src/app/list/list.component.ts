import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public value: string = ''
  public list: Array<{ nome: string }> = []

  public handleAdicionar(): void {
    this.list.push({ nome: this.value })
    this.value = ''
  }
}
