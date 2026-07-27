import { createContext, ReactNode, useContext, useState } from 'react'

type Profile = {
  name: string
  indexNumber: string
  programme: string
  level: string
  bio: string
}

const defaultProfile: Profile = {
  name: 'Gyimah-Mensah Kwaku Tawiah',
  indexNumber: '22027250',
  programme: 'BSc. Computer Science',
  level: 'Level 300',
  bio: 'Computer Science student',
}

type ProfileContextType = {
  profile: Profile
  updateProfile: (updates: Partial<Profile>) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState(defaultProfile)

  const updateProfile = (updates: Partial<Profile>) => {
    setProfile((prev) => ({ ...prev, ...updates }))
  }

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return context
}
