import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'',component:CartComponent},
  {path:'cart-list',component:CartListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
