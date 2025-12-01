import { apiService } from './api';
import { Project, ProjectFormData, PaginatedResponse, ApiResponse } from '../types';

export const projectService = {
  async generateProject(data: ProjectFormData): Promise<Project> {
    const response = await apiService.post<ApiResponse<Project>>('/projects/generate', data);
    return response.data;
  },

  async getProjects(page = 1, limit = 10): Promise<PaginatedResponse<Project>> {
    const response = await apiService.get<ApiResponse<PaginatedResponse<Project>>>(
      '/projects',
      { page, limit }
    );
    return response.data;
  },

  async getProject(id: string): Promise<Project> {
    const response = await apiService.get<ApiResponse<Project>>(`/projects/${id}`);
    return response.data;
  },

  async updateProject(id: string, data: Partial<Project>): Promise<Project> {
    const response = await apiService.put<ApiResponse<Project>>(`/projects/${id}`, data);
    return response.data;
  },

  async deleteProject(id: string): Promise<void> {
    await apiService.delete<ApiResponse<void>>(`/projects/${id}`);
  },

  async downloadPlan(projectId: string, format: 'pdf' | 'dwg' | 'obj'): Promise<Blob> {
    const response = await apiService.get(
      `/projects/${projectId}/download`,
      { format },
      { responseType: 'blob' }
    );
    return response.data;
  },
};