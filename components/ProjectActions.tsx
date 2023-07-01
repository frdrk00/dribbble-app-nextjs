'use client'

import { deleteProjects, fetchToken } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

interface ProjectActionsProps {
  projectId: string
}

const ProjectActions: FC<ProjectActionsProps> = ({ projectId }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDeleteProject = async () => {
    setIsDeleting(true)

    const { token } = await fetchToken()

    try {
      await deleteProjects(projectId, token)

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" width={15} height={158} alt="edit" />
      </Link>

      <button
        type="button"
        className={`flexCenter delete-action_btn ${
          isDeleting ? 'bg-gray' : 'bg-primary-purple'
        }`}
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" width={15} height={158} alt="delete" />
      </button>
    </>
  )
}

export default ProjectActions
