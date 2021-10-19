import { Injectable } from '@angular/core';
import { addDoc, collection as collectionFirestore, doc, DocumentReference, Firestore, updateDoc } from 'firebase/firestore';


export interface Task {
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
@Injectable({
  providedIn: 'root'
})
export class TareasService {
  doc: DocumentReference;
 
  constructor(private store: Firestore) {
    this.doc = doc(store, 'tasks'); }

  newTask = async () => {
    return await updateDoc(this.doc, 'task', {
      task_id: 0,
      task_summary: 'Task created',
      task_status: 'Open',
    });
  };
  addTask = async (task: Task) => {
    return await addDoc(collectionFirestore(this.store, 'tasks'), task);
  };
}
