import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { ModelPlat } from "../model/modelItem";
@Injectable({
  providedIn: "root"
})
export class PlatService {

  plats: Observable<ModelPlat[]>;

  constructor(private http: HttpClient) {}

  getPlats(): void {
    this.plats = this.http.get<ModelPlat[]>("http://localhost:9090/Plats");
  }
  
  getPlat(id): Observable<ModelPlat> {
    return this.http.get<ModelPlat>("http://localhost:9090/Plats/" + id);}
 
    addPlat(plat:ModelPlat){
      this.http.post("http://localhost:9090/Plats",plat).subscribe();

  }
  deletePlat(id):void{
    this.http.delete("http://localhost:9090/Plats/" + id).subscribe();
  }

}