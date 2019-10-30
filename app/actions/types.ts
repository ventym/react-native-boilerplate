import { IAppMessageType } from "app/state/types";

export interface IAppMessageAddPayload {
    lifetime?: number;
    type: IAppMessageType;
    text: string;
}
