import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './pages/notas/notas.component';

const routes: Routes = [
  { path: 'notas', component: NotasComponent },
  { path: '', redirectTo: 'notas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
