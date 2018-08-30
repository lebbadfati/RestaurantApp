import { Component, OnInit } from '@angular/core';
import { ModelPlat } from '../app/model/modelItem';
import { PlatService } from '../app/service/plat.service';

@Component({
  selector: 'app-form-add-plat',
  templateUrl: './form-add-plat.component.html',
  styleUrls: ['./form-add-plat.component.css']
})
export class FormAddPlatComponent implements OnInit {
plat: ModelPlat={id:0,nom:"",description:"", prix:1,image:""};
  constructor(private platService:PlatService) { }

  ngOnInit() {
  
  }
  onSubmit(){
    this.platService.addPlat(this.plat);
    
  }
  

}
