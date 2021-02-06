import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task;
  constructor(private taskService:TaskService,
    private router: Router) { 
    this.task = new Task();
  }

  ngOnInit(): void {
  }
  addTask()
  {
    console.log(this.task);
    this.taskService.addtask(this.task);
    this.router.navigateByUrl("/tasks/list");
  }
}
