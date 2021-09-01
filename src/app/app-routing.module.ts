import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./issue-reader/issue-reader.module').then(m => m.IssueReaderModule)
    },
    {
      path: 'chart',
      loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
