import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type UserRole =
  | 'estudiante'
  | 'profesor'

export interface Profile {
  id: string
  first_name: string
  last_name: string
  role: UserRole
  created_at?: string
  updated_at?: string
}

interface AuthContextType {
  user: User | null
  session: Session | null
  profile: Profile | null
  loading: boolean
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(
    async (userId: string) => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select(
            `
              id,
              first_name,
              last_name,
              role,
              created_at,
              updated_at
            `
          )
          .eq('id', userId)
          .maybeSingle()

        if (error) {
          console.error('Error cargando el perfil:', error);
          setProfile(null);
          return
        }

        if (!data) {
          console.warn('No existe un perfil para el usuario:', userId);
          setProfile(null);
          return
        }
        setProfile(data as Profile);
      } catch (error) {
        console.error('Error inesperado cargando perfil:', error)
        setProfile(null)
      }
    }, []
  )

  const refreshProfile =
    useCallback(async () => {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error) {
          console.error('Error obteniendo usuario:', error);
          return
        }

        if (!data.user) {
          setUser(null)
          setSession(null)
          setProfile(null)
          return
        }
        setUser(data.user)

        await loadProfile(data.user.id)
      } catch (error) {
        console.error('Error actualizando perfil:', error)
      }
    }, [loadProfile])

  useEffect(() => {
    let mounted = true

    const initializeAuth =
      async () => {
        try {
          const { data, error } =  await supabase.auth.getSession()
          if (!mounted) return
          if (error) {
            console.error('Error obteniendo sesión:', error)

            setSession(null)
            setUser(null)
            setProfile(null)
            setLoading(false)

            return
          }

          const currentSession = data.session

          const currentUser = currentSession?.user ?? null

          setSession(currentSession)
          setUser(currentUser)

          if (currentUser) {
            await loadProfile(currentUser.id)
          }

          if (!mounted) return

          setLoading(false)
        } catch (error) {
          console.error('Error inicializando autenticación:', error)

          if (!mounted) return

          setSession(null)
          setUser(null)
          setProfile(null)
          setLoading(false)
        }
      }

    initializeAuth()

    const {
      data: {
        subscription,
      },
    } =
      supabase.auth.onAuthStateChange(
        (event, newSession) => {
          if (!mounted) return
          if (event === 'TOKEN_REFRESHED') {
            setSession(newSession)
            setUser(newSession?.user ?? null)
            return
          }
          if (event === 'SIGNED_OUT') {
            setSession(null)
            setUser(null)
            setProfile(null)

            return
          }
          if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
            setSession(newSession)
            setUser(newSession?.user ?? null)

            if (newSession?.user) {
              setTimeout(() => {
                if (!mounted) return
                loadProfile(
                  newSession.user.id
                )
              }, 0)
            }
            return
          }
          if (event === 'INITIAL_SESSION') {
            setSession(newSession)
            setUser(newSession?.user ?? null)
            return
          }
          setSession(newSession)
          setUser(
            newSession?.user ?? null
          )
        }
      )
    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [loadProfile])

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        refreshProfile,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de un AuthProvider')
  }
  return context
}