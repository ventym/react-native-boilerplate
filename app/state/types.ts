export interface IState {
    appMessage: IAppMessageState;
    blabla: IBlablaState;
}

export interface IAppMessageState {
    list: IAppMessage[];
}

export interface IBlablaState {
    list: IBlabla[];
    isLoaded: boolean;
    isLoading: boolean;
}

// entities:

export type IAppMessageType = 'INFO' | 'WARN' | 'ERROR';

export interface IAppMessage {
    id: string;
    createTimestamp: number;
    lifetime: number;
    type: IAppMessageType;
    text: string;
}

export interface IBlabla {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
}
