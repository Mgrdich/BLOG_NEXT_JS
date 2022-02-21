export type Dict<T = string> = {
    [k: string]: T
}

export type API_Response = {
    status: 0 | 1;
    [k: string]: any
}