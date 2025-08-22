export type ClimbOutcome =
  | 'TopRope'
  | 'Lead'
  | 'Boulder'
  | 'Multipitch'
  | 'Trad'
  | 'Mixed'

export type ClimbAttempt = {
  outcome: ClimbOutcome
  count: number
}

export type ClimbLog = {
  id: string
  date: string
  location: string
  routeName: string
  grade: string
  attempts: ClimbAttempt[]
  notes?: string
}
