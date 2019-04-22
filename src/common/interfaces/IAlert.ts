export enum AlertType {
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    WARNING  = 'WARNING',
}

export interface IAlert {
    id: string;
    type: AlertType;
    text: string;
}
