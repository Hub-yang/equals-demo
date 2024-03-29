export interface BlockState {
  x: number
  y: number
}

export type Value = (true
  | false
  | 1
  | 0
  | -1
  | 'true'
  | 'false'
  | '1'
  | '0'
  | '-1'
  | ''
  | null
  | undefined
  | typeof Number.POSITIVE_INFINITY
  | typeof Number.NEGATIVE_INFINITY
  | []
  | [0]
  | [1]
  | [[]]
  | object
  | typeof Number.NaN)
