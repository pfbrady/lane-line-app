import { Lane } from './lane';

export interface Pool {
    numberOfLanes: number
    lanes: Lane[]
}