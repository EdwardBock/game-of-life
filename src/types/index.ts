
export type Cell = 1|0

export type Matrix = Cell[][]

export type HabitatState = Matrix

export type Pattern = {
    id: string
    variants: Matrix[]
}