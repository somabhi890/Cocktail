import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpEvent, HttpHeaderResponse, HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { apiHostName } from "../../../environments/environment";
// import { apiHostName } from "../config";
// import { apiHostName } from "C:\\Program Files\\Gati Management App\\appConfig\\config";
import { map, catchError, timeout, ignoreElements } from "rxjs/operators";
import { Store } from "@ngrx/store";
// import { IAppState } from "../store";
import { IAppState } from "../../store/model/appModel";
import { of, Observable } from "rxjs";
import { IAPIResponse } from "../../interface";
import { Router } from "@angular/router";


@Injectable()
export class CommonService {

    
// public apiHostName=null;
public appVersion="";

    constructor(private http: HttpClient, private store: Store<IAppState>, private router: Router) {
        
     }


    public get(url: string, token?: string): Observable<IAPIResponse> {

        const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
        // return this.http.get(`${apiHostName}/${url}`, { headers, observe: 'response' }).pipe(
        return this.http.get(`${apiHostName}/${url}`, { headers, observe: 'response' }).pipe(
            timeout(120000),
            map((response) => {
                // console.log(response);
            const resobj = {error: !response.ok, body: response.body, status: response.status, headers: response.headers};
            return resobj;
        }), catchError((response) => {
            // console.log("response in catch error in get");
            // console.log(response);
            const resobj = {error: !response.ok, body: response.body, status: response.status, headers: response.headers};
            return of(response);
        }));
    }

    public post(url: string, body: Object, token?: string): Observable<IAPIResponse> {

        const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
        return this.http.post(`${apiHostName}/${url}`, body, { headers, observe: 'response' }).pipe(timeout(120000),map((response) => {

            const resobj = { error: !response.ok, body: response.body, status: response.status, headers: response.headers };
            return resobj;
        }), catchError((response) => {
            // console.log("response in catch error in post");
            // console.log(response);
            const resobj = {error: !response.ok, body: response.body, status: response.status, headers: response.headers};
            return of(response);
        }));
    }

    public request(url: string, method: string, body: Object, token?: string): Observable<HttpEvent<IAPIResponse>> {
        const headers: HttpHeaders = new HttpHeaders({ "Authorization": "Bearer " + token });
        const req = new HttpRequest(method, `${apiHostName}/${url}`, body, {
            reportProgress: true,
            headers
        });
        return this.http.request(req);
    }

    public put(url: string, body: Object, token?: string): Observable<IAPIResponse> {
        const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put(`${apiHostName}/${url}`, body, { headers, observe: 'response' }).pipe(timeout(120000),map((response) => {

            const resobj = { error: !response.ok, body: response.body, status: response.status, headers: response.headers };
            return resobj;
        }), catchError((response) => {
            const resobj = {error: !response.ok, body: response.body, status: response.status, headers: response.headers};
            return of(response);
        }));
    }

    public delete(url: string, token?: string): Observable<IAPIResponse> {
        const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.delete(`${apiHostName}/${url}`, { headers, observe: 'response' }).pipe(timeout(120000),
            map((response) => {

            const resobj = { error: !response.ok, body: response.body, status: response.status, headers: response.headers };
            return resobj;
        }), catchError((response) => {
            const resobj = { error: !response.ok, body: response.body, status: response.status, headers: response.headers };
            return of(response.error);
        }));
    }


    getCategories() {
        let headers = new HttpHeaders({
        // "Content-Type": "application/json",
        
        });
        // headers.append('Access-Control-Allow-Origin', 'https://localhost:4200');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',{headers : headers});
        
        }
        
        
    getCocktails() {
        let headers = new HttpHeaders({
        // "Content-Type": "application/json",
        
        });
        // headers.append('Access-Control-Allow-Origin', 'https://localhost:4200');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',{headers : headers});
        
        }
        
        getIngredients() {
        let headers = new HttpHeaders({
        // "Content-Type": "application/json",
        
        });
        // headers.append('Access-Control-Allow-Origin', 'https://localhost:4200');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',{headers : headers});
        
        }
        
        
        getCocktailsByIngredients(ingName) {
        let headers = new HttpHeaders({
        });        
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ingName,{headers : headers});
        
        }
        
        
        getCocktailsByCategory(categName) {
        let headers = new HttpHeaders({
        });        
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+categName,{headers : headers});
        
        }

        getCocktailsByName(drinkName) {
        let headers = new HttpHeaders({
        });        
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkName,{headers : headers});
        
        }

    
}
