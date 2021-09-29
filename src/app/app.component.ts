import {Component, OnInit} from '@angular/core';

export interface Task {
  value: string
  complete: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo'
  InValue = ""

  tasks: Task[] = []

  SaveTodo() {
    localStorage.setItem("todo", JSON.stringify(this.tasks))
  }

  doSomething(date:any){
    this.tasks = this.tasks.filter((item) => item.value !== date);
  }

  ClearTodo(){
    this.tasks.length = 0
  }

  InputTask() {
    this.tasks.push({value: this.InValue, complete: false})
    this.InValue = ""
  }

  ngOnInit() {
    let jsn = localStorage.getItem("todo")
    if (jsn !== null)
      this.tasks = JSON.parse(jsn)
  }
}
