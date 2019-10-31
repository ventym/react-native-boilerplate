export interface IState {
    appMessage: IAppMessageState;
    client: IClientState;
}

export interface IAppMessageState {
    list: IAppMessage[];
}

export interface IClientState {
    list: IClient[];
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

export interface IClient {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
}
