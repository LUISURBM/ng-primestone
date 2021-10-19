import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Firestore } from 'firebase/firestore';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-kanban-form',
  templateUrl: './kanban-form.component.html',
  styleUrls: ['./kanban-form.component.scss']
})
export class KanbanFormComponent implements OnInit {


  form: FormGroup;
  constructor(builder: FormBuilder, private store: TareasService) {

    this.form = builder.group({
      task_id: builder.control(''),
      task_status: builder.control(''),
      task_summary: builder.control(''),
      task_type: builder.control(''),
      task_priority: builder.control(''),
      task_tags: builder.control(''),
      task_estimate: builder.control(''),
      task_assignee: builder.control(''),
      task_rank: builder.control(''),
    });


  }

  ngOnInit(): void {
  }

  async agregar() {
    await this.store.addTask(this.form.value);
  }
}
