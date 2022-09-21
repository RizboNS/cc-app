import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuilTestComponent } from './components/quil-test/quil-test.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test2', component: Test2Component },
  { path: 'quil', component: QuilTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
