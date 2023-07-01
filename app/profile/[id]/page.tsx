import { FC } from 'react'
import { getUserProjects } from '@/lib/actions'
import { UserProfile } from '@/common.types'
import ProfilePage from '@/components/ProfilePage'

interface UserProfileProps {
  params: {
    id: string
  }
}

const UserProfile: FC<UserProfileProps> = async ({ params }) => {
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile
  }
  if (!result?.user) {
    return <p className="no-result-text">Failed to fetch user info</p>
  }

  return <ProfilePage user={result?.user} />
}

export default UserProfile
