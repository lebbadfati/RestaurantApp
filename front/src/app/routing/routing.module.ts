import { NgModule } from '@angular/core';
import { Routes,RouterModule  } from "@angular/router";
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemComponent } from '../item-list/item/item.component';
import { PlatResolverService } from '../resolver/plat-resolver.service';
import { FormAddPlatComponent } from '../../form-add-plat/form-add-plat.component';


const appRoutes:Routes=[
  {path:"",component:ItemListComponent},
  {path:"addDetail",component:FormAddPlatComponent},
{
  path:"platDetail/:id",
  component: ItemComponent,
  resolve : {
    plat : PlatResolverService
  }
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
