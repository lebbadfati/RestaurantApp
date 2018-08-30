import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemComponent } from './item/item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ItemListComponent, ItemComponent],
  exports:[ItemListComponent]
})
export class ItemListModule  { 

}
