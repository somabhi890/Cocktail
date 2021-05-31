
export interface IDictionaryState<T> {
    readonly [id: string]: T;
}

export interface IApiStatus {
    readonly error: boolean;
    readonly message: string;
    readonly isActive: boolean;
}

export interface IAppState {
    readonly homeState: IHomeState;
}


export interface IHomeState {
    readonly isActive: boolean;
    readonly apiFailed: boolean;
    readonly pinnedJobs: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>
    };
    readonly currentSelectedJob: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>
    };
    
    readonly credentials: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>
    };    
    readonly categoriesList: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[]
    };
    
    readonly cocktailsList: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[]
    };    
    readonly ingredientsList: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[]
    };
    
    
}


export const defaultApiStatus: IApiStatus = {
    error: false,
    isActive: false,
    message: null
};


export const INITIAL_STATE: IAppState = {
   
    homeState: {
        isActive: false,
        apiFailed: false,
        pinnedJobs: {
            status: defaultApiStatus,
            data: null
        },
        currentSelectedJob: {
            status: defaultApiStatus,
            data: null
        },
        credentials: {
            status: defaultApiStatus,
            data: null
        },
        categoriesList: {
            status: defaultApiStatus,
            data: []
        },
        cocktailsList: {
            status: defaultApiStatus,
            data: []
        },
        ingredientsList: {
            status: defaultApiStatus,
            data: []
        }
    }
    
};
