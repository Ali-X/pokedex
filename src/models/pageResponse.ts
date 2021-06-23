export interface IPageResponse {
    count: number,
    next: string,
    previous: string,
    results: Array<IPageResponseItem>
}

export interface IPageResponseItem {
    name: string,
    url: string
}