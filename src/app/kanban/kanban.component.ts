import { Component, OnInit } from '@angular/core';
import { collection as collectionFirestore, collectionData } from '@angular/fire/firestore';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { Firestore } from 'firebase/firestore';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Observable } from 'rxjs';

interface Task {
  task_id: number;
  task_status: string;
  task_summary: string;
  task_type: string;
  task_priority: number;
  task_tags: string;
  task_estimate: string;
  task_assignee: string;
  task_rankId: string;
};

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  public data$: Observable<DocumentData[]>;
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id'
  };

  constructor(private store: Firestore) {

    const collection = collectionFirestore(store, 'tasks');
    this.data$ = collectionData(collection);

  }

  ngOnInit(): void {
  }

}
