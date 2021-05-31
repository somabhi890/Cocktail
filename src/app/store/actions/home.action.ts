import { BaseAction } from "./base.actions";


export const DEFAULT = 'DEFAULT';

export const GET_CREDENTIALS = 'GET_CREDENTIALS';
export const GET_CREDENTIALS_SUCCESS = 'GET_CREDENTIALS_SUCCESS';
export const GET_CREDENTIALS_FAILURE = 'GET_CREDENTIALS_FAILURE';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const GET_COCTAILS = 'GET_COCTAILS';
export const GET_COCTAILS_SUCCESS = 'GET_COCTAILS_SUCCESS';
export const GET_COCTAILS_FAILURE = 'GET_COCTAILS_FAILURE';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';

export const GET_COCKTAILS_BY_CATEGORY = 'GET_COCKKTAILS_BY_CATEGORY';
export const GET_COCKTAILS_BY_CATEGORY_SUCCESS = 'GET_COCKKTAILS_BY_CATEGORY_SUCCESS';
export const GET_COCKTAILS_BY_CATEGORY_FAILURE = 'GET_COCKKTAILS_BY_CATEGORY_FAILURE';

export const GET_COCKTAILS_BY_INGREDIENTS = 'GET_COCKKTAILS_BY_INGREDIENTS';
export const GET_COCKTAILS_BY_INGREDIENTS_SUCCESS = 'GET_COCKTAILS_BY_INGREDIENTS_SUCCESS';
export const GET_COCKTAILS_BY_INGREDIENTS_FAILURE = 'GET_COCKTAILS_BY_INGREDIENTS_FAILURE';

export const GET_COCKTAILS_BY_NAME = 'GET_COCKTAILS_BY_NAME';
export const GET_COCKTAILS_BY_NAME_SUCCESS = 'GET_COCKTAILS_BY_NAME_SUCCESS';
export const GET_COCKTAILS_BY_NAME_FAILURE = 'GET_COCKTAILS_BY_NAME_FAILURE';


export class DefaultAction extends BaseAction {
    readonly type = DEFAULT;
}

export class GetCredentials extends BaseAction {
    readonly type = GET_CREDENTIALS;
}

export class GetCredentialsSuccessAction extends BaseAction {
    readonly type = GET_CREDENTIALS_SUCCESS;
}

export class GetCredentialsFailureAction extends BaseAction {
    readonly type = GET_CREDENTIALS_FAILURE;
}
export class GetCategories extends BaseAction {
    readonly type = GET_CATEGORIES;
}

export class GetCategoriesSuccessAction extends BaseAction {
    readonly type = GET_CATEGORIES_SUCCESS;
}

export class GetCategoriesFailureAction extends BaseAction {
    readonly type = GET_CATEGORIES_FAILURE;
}
export class GetCoctails extends BaseAction {
    readonly type = GET_COCTAILS;
}

export class GetCoctailsSuccessAction extends BaseAction {
    readonly type = GET_COCTAILS_SUCCESS;
}

export class GetCoctailsFailureAction extends BaseAction {
    readonly type = GET_COCTAILS_FAILURE;
}
export class GetIngredients extends BaseAction {
    readonly type = GET_INGREDIENTS;
}

export class GetIngredientsSuccessAction extends BaseAction {
    readonly type = GET_INGREDIENTS_SUCCESS;
}

export class GetIngredientsFailureAction extends BaseAction {
    readonly type = GET_INGREDIENTS_FAILURE;
}

export class GetCocktailsByName extends BaseAction {
    readonly type = GET_COCKTAILS_BY_NAME;
}

export class GetCocktailsByNameSuccessAction extends BaseAction {
    readonly type = GET_COCKTAILS_BY_NAME_SUCCESS;
}

export class GetCocktailsByNameFailureAction extends BaseAction {
    readonly type = GET_COCKTAILS_BY_NAME_FAILURE;
}
export class GetCocktailsByCategory extends BaseAction {
    readonly type = GET_COCKTAILS_BY_CATEGORY;
}

export class GetCocktailsByCategorySuccessAction extends BaseAction {
    readonly type = GET_COCKTAILS_BY_CATEGORY_SUCCESS;
}

export class GetCocktailsByCategoryFailureAction extends BaseAction {
    readonly type = GET_COCKTAILS_BY_CATEGORY_FAILURE;
}

export class GetCocktailsByIngredients extends BaseAction {
    readonly type = GET_COCKTAILS_BY_INGREDIENTS;
}

export class GetCocktailsByIngredientsSuccessAction extends BaseAction {
    readonly type = GET_COCKTAILS_BY_INGREDIENTS_SUCCESS;
}

export class GetCocktailsByIngredientsFailureAction extends BaseAction {
    readonly type = GET_COCKTAILS_BY_INGREDIENTS_FAILURE;
}