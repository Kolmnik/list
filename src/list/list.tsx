import React from 'react';
import {v1} from "uuid";

export type listType = {
    id: string
    name: string
    count: number
}

export const list: Array<listType> = [
    {id: v1(), name: 'Pasha', count: 300},
    {id: v1(), name: 'Pasha', count: 500},
    {id: v1(), name: 'Pasha', count: 800},
    {id: v1(), name: 'Pasha', count: 900},
]


