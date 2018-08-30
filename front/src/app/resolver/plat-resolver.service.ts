import { Injectable } from "@angular/core";
import {Router, ActivatedRouteSnapshot} from "@angular/router";
import { Observable, of } from "rxjs";
import {  catchError, first } from "rxjs/operators";
import { PlatService } from "../service/plat.service";

@Injectable({
 providedIn: "root"
})
export class PlatResolverService {
 constructor(private plat: PlatService, private router: Router) {}

 resolve(route: ActivatedRouteSnapshot): Observable<any> {
   let id = route.paramMap.get("id");

   return this.plat.getPlat(id).pipe(
     first(),
     catchError(error => {
       this.router.navigateByUrl("/");
       return of(null);
     })
   );
 }
}
