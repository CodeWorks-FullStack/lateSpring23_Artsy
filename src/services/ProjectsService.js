import { AppState } from '../AppState.js'
import { Project } from '../models/Project.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class ProjectsService {
  async getProjects() {
    AppState.projects = []
    const res = await api.get('api/projects')

    logger.log('What are the projects', res.data)
    AppState.projects = res.data.map(p => new Project(p))
  }

  async getProjectsByProfile(id) {
    AppState.projects = []
    const res = await api.get('/api/projects', {
      params: {
        creatorId: id
      }
    })

    AppState.projects = res.data.map(p => new Project(p))
  }
}

export const projectsService = new ProjectsService()
