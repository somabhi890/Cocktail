import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, timer, interval } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { homeActions } from '../actions/index';
import { map, catchError, withLatestFrom, exhaustMap, switchMap } from 'rxjs/operators';
import { IAppState } from '../model/appModel';
import { IAPIResponse } from '../../interface';
import { CocktailServiceService } from '../../home/cocktail-service.service';
import { CommonService } from 'src/app/shared/services/common.service';


@Injectable()
export class HomeEffects {

    constructor(private store: Store<IAppState>, private actions$: Actions, private cocktailService:CocktailServiceService, private commonservice:CommonService){}


    
    @Effect()
    getCategories$: Observable<Action> = this.actions$.pipe(
        ofType(homeActions.GET_CATEGORIES),
        switchMap((x: any) => {
            return this.commonservice.getCategories().pipe(map((response: IAPIResponse) => {
                console.log(response);
                if (response.error) {
                    return new homeActions.GetCategoriesFailureAction({ msg: "Unable to fetch Credentials!" });
                }
                return new homeActions.GetCategoriesSuccessAction(response);
            }), catchError(() => {
                return of(new homeActions.GetCategoriesFailureAction({ msg: "Unable to fetch Credentials!" }));
            }));
        })
    );

    @Effect()
    getDrinks$: Observable<Action> = this.actions$.pipe(
        ofType(homeActions.GET_COCTAILS),
        switchMap((x: any) => {
            return this.commonservice.getCocktails().pipe(map((response: IAPIResponse) => {
                console.log(response);
                if (response.error) {
                    return new homeActions.GetCoctailsFailureAction({ msg: "Unable to fetch Credentials!" });
                }
                return new homeActions.GetCoctailsSuccessAction(response);
            }), catchError(() => {
                return of(new homeActions.GetCoctailsFailureAction({ msg: "Unable to fetch Credentials!" }));
            }));
        })
    );
    
    
    @Effect()
    getIngredients$: Observable<Action> = this.actions$.pipe(
        ofType(homeActions.GET_INGREDIENTS),
        switchMap((x: any) => {
            return this.commonservice.getIngredients().pipe(map((response: IAPIResponse) => {
                console.log(response);
                if (response.error) {
                    return new homeActions.GetIngredientsFailureAction({ msg: "Unable to fetch Credentials!" });
                }
                return new homeActions.GetIngredientsSuccessAction(response);
            }), catchError(() => {
                return of(new homeActions.GetIngredientsFailureAction({ msg: "Unable to fetch Credentials!" }));
            }));
        })
    );
    
    
    @Effect()
    getCocktailByName$: Observable<Action> = this.actions$.pipe(
        ofType(homeActions.GET_COCKTAILS_BY_NAME),
        switchMap((x: any) => {
            console.log(x);
            return this.commonservice.getCocktailsByName(x.payload).pipe(map((response: IAPIResponse) => {
                console.log(response);
                if (response.error) {
                    return new homeActions.GetCocktailsByNameFailureAction({ msg: "Unable to fetch Credentials!" });
                }
                return new homeActions.GetCocktailsByNameSuccessAction(response);
            }), catchError(() => {
                return of(new homeActions.GetCocktailsByNameFailureAction({ msg: "Unable to fetch Credentials!" }));
            }));
        })
    );

    @Effect()
    getCocktailByIngredients$: Observable<Action> = this.actions$.pipe(
        ofType(homeActions.GET_COCKTAILS_BY_INGREDIENTS),
        switchMap((x: any) => {
            console.log(x);
            return this.commonservice.getCocktailsByIngredients(x.payload).pipe(map((response: IAPIResponse) => {
                console.log(response);
                if (response.error) {
                    return new homeActions.GetCocktailsByIngredientsFailureAction({ msg: "Unable to fetch Credentials!" });
                }
                return new homeActions.GetCocktailsByIngredientsSuccessAction(response);
            }), catchError(() => {
                return of(new homeActions.GetCocktailsByIngredientsFailureAction({ msg: "Unable to fetch Credentials!" }));
            }));
        })
    );

    @Effect()
    getCocktailByCategory$: Observable<Action> = this.actions$.pipe(
        ofType(homeActions.GET_COCKTAILS_BY_CATEGORY),
        switchMap((x: any) => {
            console.log(x);
            return this.commonservice.getCocktailsByCategory(x.payload).pipe(map((response: IAPIResponse) => {
                console.log(response);
                if (response.error) {
                    return new homeActions.GetCocktailsByCategoryFailureAction({ msg: "Unable to fetch Credentials!" });
                }
                return new homeActions.GetCocktailsByCategorySuccessAction(response);
            }), catchError(() => {
                return of(new homeActions.GetCocktailsByCategoryFailureAction({ msg: "Unable to fetch Credentials!" }));
            }));
        })
    );
}