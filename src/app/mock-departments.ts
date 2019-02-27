import {Department} from "./department";

export const DEPARTMENTS: Department [] = [

    { id: 1, name:'Software'},
    { id: 2, name:'Business'},
    { id: 3, name:'Technology'}
];

export interface Flyer { newDepartment: boolean; }
