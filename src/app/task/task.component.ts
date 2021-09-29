import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  btncomplete = "btn-danger"
  btnvalue = "Не выполнено"
  change = true

  @Input()
  task!: Task;

  @Output()
  onDatePicked: EventEmitter<any> = new EventEmitter<any>()

  TaskChange(){
    this.change = false
  }

  TaskDelete(date: any) {
    this.onDatePicked.emit(date)
  }

  TaskChangeComplete(event:any) {
    this.change = true
    this.task.value = event.target.value
  }



  OnComplite(){
    if (this.btncomplete === "btn-success") {
      this.task.complete = false
      this.btncomplete = "btn-danger"
      this.btnvalue = "Не выполнено"
    } else {
      this.task.complete = true
      this.btncomplete = "btn-success"
      this.btnvalue = "Выполнено"
    }
  }

  constructor() { }

  ngOnInit(): void {
    if (this.task.complete === true){
      this.btncomplete = "btn-success"
      this.btnvalue = "Выполнено"
    }
  }

}
