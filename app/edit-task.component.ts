import {  Component, Input, Output, EventEmitter  } from '@angular/core';
import {  Task  } from './task.model';

@Component ({
  selector: 'edit-task',
  template: `
  <div *ngIf="childSelectedTask">
    <h1>Edit Task</h1>
    <div>
      <label>Enter Task description</label>
      <input [(ngModel)]="childSelectedTask.description">
    </div>
    <div>
      <label>Enter Task priority</label>
      <input [(ngModel)]="childSelectedTask.priority">
    </div>
    <div>
      <label>ID</label>
      <input [(ngModel)]="childSelectedTask.id">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
