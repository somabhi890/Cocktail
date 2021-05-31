import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IAPIResponse } from '../interface';
import { CommonService } from '../shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(private commonService:CommonService,private http: HttpClient) { }


 getCategories(){
  let headers = new HttpHeaders({
  "Content-Type": "application/json",
  
  });
  // headers.append('Access-Control-Allow-Origin', 'https://localhost:4200');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  
  // return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',{headers : headers});
  
  }


getCocktails(){
  let headers = new HttpHeaders({
  "Content-Type": "application/json",
  
  });
  // headers.append('Access-Control-Allow-Origin', 'https://localhost:4200');
  // headers.append('Access-Control-Allow-Credentials', 'true');
  
  // return this.http.get('www.thecocktaildb.com/api/json/v1/1/search.php?f=a',{headers : headers});
  
  }
}
