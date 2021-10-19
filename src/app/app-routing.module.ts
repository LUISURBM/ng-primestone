import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanFormComponent } from './kanban-form/kanban-form.component';
import { KanbanComponent } from './kanban/kanban.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: KanbanComponent
  },
  {
    path: 'kanban-form',
    component: KanbanFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
