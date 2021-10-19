import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore, Firestore } from '@angular/fire/firestore';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { KanbanFormComponent } from './kanban-form/kanban-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TareasService } from './tareas.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    KanbanModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
