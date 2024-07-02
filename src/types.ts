export interface BlockState {
  x: number
  y: number
}

type PrimitiveValues = true | false | 1 | 0 | -1 | 2 | 'true' | 'false' | '1' | '0' | '-1' | '2' | ''
type SpecialValues = null | undefined | typeof Number.POSITIVE_INFINITY | typeof Number.NEGATIVE_INFINITY | typeof Number.NaN
type ArrayValues = [] | [0] | [1] | [[]]
type ObjectValues = object

export type Value = PrimitiveValues | SpecialValues | ArrayValues | ObjectValues
