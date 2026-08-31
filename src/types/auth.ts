export type UserRole = 'estudiante' | 'profesor'

export interface Profile {
  id: string
  first_name: string
  last_name: string
  role: UserRole
  created_at: string
  updated_at: string
}