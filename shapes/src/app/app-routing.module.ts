import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', component:MenuComponent},
      {path: 'rectangle', component: RectangleComponent},
      {path: 'triangle', component: TriangleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
