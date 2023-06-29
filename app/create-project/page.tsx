import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm'
import { FC } from 'react'

interface CreateProjectProps {}

const CreateProject: FC<CreateProjectProps> = ({}) => {
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProjectForm />
    </Modal>
  )
}

export default CreateProject
