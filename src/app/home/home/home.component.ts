import { Component, NgZone, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { homeActions } from 'src/app/store/actions';
import { IHomeState } from 'src/app/store/model/appModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cockctailsList:any[]=[];
  categoriesList:any[]=[];
  ingredientsList:any[]=[];
  subscription:any=null;
  apiActive:boolean=false;
  searchText:string=""

  constructor(public _store:Store<any>, public zone: NgZone) {
   
   }

  ngOnInit() {
    this.subscription = this._store.select(x => x.homeState).subscribe((homeState: IHomeState) => {
      if (!homeState) return;
      this.apiActive = homeState.isActive;
      if(homeState.categoriesList && homeState.categoriesList.data && homeState.categoriesList.data.length){
        console.log("homeState.categoriesList");
        console.log(homeState.categoriesList);
        this.categoriesList=homeState.categoriesList.data;

      }   

    
    if(homeState.cocktailsList && homeState.cocktailsList.data && homeState.cocktailsList.data.length){
        console.log("homeState.cocktailsList");
        console.log(homeState.cocktailsList);
        this.cockctailsList=homeState.cocktailsList.data;
      } 
      
      if(homeState.ingredientsList && homeState.ingredientsList.data && homeState.ingredientsList.data.length){
        console.log("homeState.ingredientsList");
        console.log(homeState.ingredientsList);
        this.ingredientsList=homeState.ingredientsList.data;
      }   
    });

    this._store.dispatch(new homeActions.GetCategories());
    this._store.dispatch(new homeActions.GetCoctails());
    this._store.dispatch(new homeActions.GetIngredients());
  }

  filterByCategory(filterVal){
    console.log(filterVal);
    this._store.dispatch(new homeActions.GetCocktailsByCategory(filterVal));
  }
  filterByName(){
    console.log(this.searchText);
    this._store.dispatch(new homeActions.GetCocktailsByName(this.searchText));
  }
  filterByIngredients(filterVal){
    console.log(filterVal);
    this._store.dispatch(new homeActions.GetCocktailsByIngredients(filterVal));
  }

}
