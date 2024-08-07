export interface EventModel {
    uuid: string;
    name: string;
    description: string;
    theme: string;
    date: Date;
    location: string;
    status: EventStatus;
}

export enum EventStatus {
    ENDED,
    ACTIVE,
    CANCELED,
    CONCLUDED
}