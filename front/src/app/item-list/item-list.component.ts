import { Component, OnInit, Input } from '@angular/core';
import { ModelPlat } from '../model/modelItem';
import { PlatService } from '../service/plat.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
 plat:ModelPlat[];
  constructor(private platService:PlatService) { }
 

  ngOnInit() {
    this.platService.getPlats();
  }

}
