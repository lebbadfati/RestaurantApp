import { Component, OnInit, Input } from '@angular/core';
import { ModelPlat } from '../../model/modelItem';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from '../../service/plat.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  plat: ModelPlat;

  constructor(private route:ActivatedRoute,private platService:PlatService) { }

  ngOnInit() {
    console.log(this.route.data)
    this.route.data.subscribe(v =>{
      this.plat=v.plat;
  });
  }
  onDelete(){
    this.platService.deletePlat(this.plat.id);
  }
  

}
