
import { EResponseType, TDispatch, TActionBuilder, EMethod } from "./types";

const customPost = (url: string, headers?: any, body?: any) => {
    return fetch(url,{
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify(body),
    })
};

const customGet = (url: string, headers?: any) => {
    return fetch(url,{
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: headers,
    })
}

export const processPost = async (
    dispatch: TDispatch,
    actionBuilder: TActionBuilder,
    response: any,
) => {
    if (response.ok) {
        const data = await response.json();
        dispatch(actionBuilder({
            status: EResponseType.SUCCESS,
            data,
        }))
    } else {
        dispatch(actionBuilder({
            status: EResponseType.ERROR,
            error: response.status
        }))
    }
};

export const processGet = async (
    dispatch: TDispatch,
    actionBuilder: TActionBuilder,
    response: any,
) => {
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        dispatch(actionBuilder({
            status: EResponseType.SUCCESS,
            data,
        }))
    } else {
        dispatch(actionBuilder({
            status: EResponseType.ERROR,
            error: response.status
        }))
    }
};


export const dispatchAsync = async (
    dispatch: TDispatch,
    method: EMethod,
    body: any,
    headers: any,
    url: string,
    actionBuilder: TActionBuilder,
): Promise<any> => {
    dispatch(actionBuilder({ status: EResponseType.LOADING }));
    try {
        if (method === EMethod.POST) {
            const response = await customPost(url,headers,body);
            return processPost(dispatch,actionBuilder,response);
        } else if (method === EMethod.GET) {
            const response = await customGet(url, headers);
            return processGet(dispatch,actionBuilder,response);
        }

    } catch (e) {
        if (e instanceof Error) {
            dispatch(
                actionBuilder({
                    status: EResponseType.ERROR,
                    error: e.message
                })
            )
        }
    }
};