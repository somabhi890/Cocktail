import { INITIAL_STATE, defaultApiStatus,IHomeState } from '../model/appModel';
import { homeActions,  } from '../actions';
import { BaseAction } from "../actions/base.actions";

export function homeReducer(state: IHomeState = null, action: BaseAction): IHomeState {
    
    switch (action.type) {

    
        case homeActions.GET_CREDENTIALS: return Object.assign({}, state, <IHomeState>{ isActive: true, credentials: { data: null, status: { isActive: true } } });
        case homeActions.GET_CREDENTIALS_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, credentials: { data: action.payload, status: { isActive: false, error: false, message: "Credentails fetched" } } });
        case homeActions.GET_CREDENTIALS_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, credentials: { data: null, status: { isActive: false, error: true, message: action.payload.msg } } });

        case homeActions.GET_CATEGORIES: return Object.assign({}, state, <IHomeState>{ isActive: true, categoriesList: { data: [], status: { isActive: true } } });
        case homeActions.GET_CATEGORIES_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, categoriesList: { data: action.payload.drinks, status: { isActive: false, error: false, message: "Categories fetched" } } });
        case homeActions.GET_CATEGORIES_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, categoriesList: { data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        case homeActions.GET_COCTAILS: return Object.assign({}, state, <IHomeState>{ isActive: true, cocktailsList: { data: [], status: { isActive: true } } });
        case homeActions.GET_COCTAILS_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: action.payload.drinks, status: { isActive: false, error: false, message: "Categories fetched" } } });
        case homeActions.GET_COCTAILS_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        case homeActions.GET_INGREDIENTS: return Object.assign({}, state, <IHomeState>{ isActive: true, ingredientsList: { data: [], status: { isActive: true } } });
        case homeActions.GET_INGREDIENTS_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, ingredientsList: { data: action.payload.drinks, status: { isActive: false, error: false, message: "ingredientsList fetched" } } });
        case homeActions.GET_INGREDIENTS_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, ingredientsList: { data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        
        case homeActions.GET_COCKTAILS_BY_CATEGORY: return Object.assign({}, state, <IHomeState>{ isActive: true, cocktailsList: { data: [], status: { isActive: true } } });
        case homeActions.GET_COCKTAILS_BY_CATEGORY_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: action.payload.drinks, status: { isActive: false, error: false, message: "Categories fetched" } } });
        case homeActions.GET_COCKTAILS_BY_CATEGORY_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        
        case homeActions.GET_COCKTAILS_BY_INGREDIENTS: return Object.assign({}, state, <IHomeState>{ isActive: true, cocktailsList: { data: [], status: { isActive: true } } });
        case homeActions.GET_COCKTAILS_BY_INGREDIENTS_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: action.payload.drinks, status: { isActive: false, error: false, message: "Categories fetched" } } });
        case homeActions.GET_COCKTAILS_BY_INGREDIENTS_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        
        case homeActions.GET_COCKTAILS_BY_NAME: return Object.assign({}, state, <IHomeState>{ isActive: true, cocktailsList: { data: [], status: { isActive: true } } });
        case homeActions.GET_COCKTAILS_BY_NAME_SUCCESS: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: action.payload.drinks, status: { isActive: false, error: false, message: "Categories fetched" } } });
        case homeActions.GET_COCKTAILS_BY_NAME_FAILURE: return Object.assign({}, state, <IHomeState>{ isActive: false, cocktailsList: { data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        
    }
}