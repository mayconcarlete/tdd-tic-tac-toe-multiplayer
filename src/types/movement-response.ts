import { Movement } from "./movement";

export type MovementResponse = {
    status: boolean,
    movement: number
    history: Movement[]
}