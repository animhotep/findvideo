import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: 'about', component: AboutComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
