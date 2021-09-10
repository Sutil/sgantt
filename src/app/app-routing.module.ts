import { MembersModule } from './members/members.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      loadChildren: () => import('./issue-reader/issue-reader.module').then(m => m.IssueReaderModule)
    },
    {
      path: 'members',
      loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
    },
    {
      path: 'chart',
      loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
    },
    {
      path: 'notion-config',
      loadChildren: () => import('./notion-config/notion-config.module').then(m => m.NotionConfigModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
