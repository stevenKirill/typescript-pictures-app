import { Action } from 'redux';

export interface IAction<T> extends Action {
    payload: T;
}

interface IError {
    message?: string;
    code?: string;
};

export interface IAnimal {
    brightness: string;
    code: number;
    height: number;
    id: number;
    orientation: string;
    tags: Array<string>;
    url: string;
    width: number;
};

export interface IInitialState {
    loadAnimals: boolean;
    errorAnimals: IError;
    catData: IAnimal
};

export type GenericGetState<T> = () => T;
export type GenericThunkAction<T> = (dispatch: GenericDispatch<T>, getState: GenericGetState<T>) => void;

export type GenericDispatch<T> = (action: Action | IAction<any> | GenericThunkAction<T>) => void;

export type GenericSelector<T, I> = (state: T, ...args: any) => I;

export enum EResponseType {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type TDispatch = GenericDispatch<IInitialState>;
