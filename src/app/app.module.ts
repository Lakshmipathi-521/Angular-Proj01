import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { InWordsPipe } from './pipe/in-words.pipe';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';

const routs: Routes = [
  {path:'',redirectTo:'/loan',pathMatch:'full'},
  {path:'loan',component:LoanFormComponent},
  { path: 'pipe', component: BuiltInPipesComponent },
  { path: 'sdd', component: StructuralDirectiveDemoComponent },
  {
    path: 'tasks', component: TaskManagerComponent, children: [
      {path:'',redirectTo:'/list',pathMatch:'full'},
      {path:'list',component:TaskListComponent},
      { path: 'new', component: AddTaskComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    BuiltInPipesComponent,
    InWordsPipe,
    MenuBarComponent,
    StructuralDirectiveDemoComponent,
    TaskManagerComponent,
    TaskListComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
