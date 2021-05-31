import { Action } from "@ngrx/store";

export abstract class BaseAction implements Action {
    abstract type: string
    constructor(public payload?: any) { }
}

export const STORAGE = '@ngrx/store/storage';

export class Storage extends BaseAction {
    readonly type = STORAGE;
}