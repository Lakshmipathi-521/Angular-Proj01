import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];

  constructor()
  {
    this.tasks = [
      { taskId: 1, task: "Pay mobile bills", isComplete: false },
      { taskId: 2, task: "Refill petrol", isComplete: true },
      {taskId:3,task:"Call manager",isComplete:false}
    ];
  }
  getTasks()
  {
    return this.tasks;
  }
  addtask(task:Task)
  {
    this.tasks.push(task);
  }
  getTaskById(id: number): Task{
    return this.tasks.find(task => task.taskId == id);
  }
  markComplete(id: number){
    this.tasks.find(task => task.taskId == id).isComplete=true;
  }
  unmarkComplete(id: number){
    this.tasks.find(task => task.taskId == id).isComplete=false;
  }
}
