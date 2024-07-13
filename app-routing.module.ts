import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cover', pathMatch: 'full' },
  { path: 'cover', loadChildren: () => import('./cover/cover.module').then(m => m.CoverPageModule) },
  { path: 'toc', loadChildren: () => import('./toc/toc.module').then(m => m.TocPageModule) },
  { path: 'content/:id', loadChildren: () => import('./content/content.module').then(m => m.ContentPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
