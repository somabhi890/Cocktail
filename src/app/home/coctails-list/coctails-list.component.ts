import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { homeActions } from 'src/app/store/actions';
import { IHomeState } from 'src/app/store/model/appModel';

@Component({
  selector: 'app-coctails-list',
  templateUrl: './coctails-list.component.html',
  styleUrls: ['./coctails-list.component.css']
})
export class CoctailsListComponent implements OnInit {
  subscription:any=null;
  apiActive:boolean=false;
  cockctailsList:any[]=[];
  
  constructor(private _store:Store<any>) { }

  ngOnInit() {
    this.subscription = this._store.select(x => x.homeState).subscribe((homeState: IHomeState) => {
      if (!homeState) return;
      this.apiActive = homeState.isActive;
    
    if(homeState.cocktailsList && homeState.cocktailsList.data && homeState.cocktailsList.data.length){
        
        console.log("homeState.cocktailsList");
        console.log(homeState.cocktailsList);
        this.cockctailsList=homeState.cocktailsList.data;
      }   
    });

    this._store.dispatch(new homeActions.GetCoctails());
  }

}
