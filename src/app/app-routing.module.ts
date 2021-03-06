import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {EntryEditorComponent} from './entry-editor/entry-editor.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'workouts', component: WorkoutsComponent},
  { path: 'workouts/:id', component: EntryEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
