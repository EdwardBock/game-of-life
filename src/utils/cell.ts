import {Cell} from "../types";

export const isAlive = (cell: Cell) => cell == 1;
export const toggleAlive = (cell: Cell): Cell => cell == 1 ? 0:1;