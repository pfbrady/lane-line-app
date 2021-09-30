import { lane } from './lane';

export interface pool {
    lanes: lane[]
    laneNumber: number
}