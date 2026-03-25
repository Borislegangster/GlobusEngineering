import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Backend FastAPI url
  headers: {
    'Content-Type': 'application/json',
  },
});

export const cmsApi = {
  getPages: () => api.get('/cms/pages/'),
  getPage: (slug: string) => api.get(`/cms/pages/${slug}`),
  updatePage: (slug: string, data: any) => api.put(`/cms/pages/${slug}`, data),

  getServices: () => api.get('/cms/services/'),
  createService: (data: any) => api.post('/cms/services/', data),
  updateService: (slug: string, data: any) => api.put(`/cms/services/${slug}`, data),
  deleteService: (slug: string) => api.delete(`/cms/services/${slug}`),

  getProjects: () => api.get('/cms/projects/'),
  getProject: (slug: string) => api.get(`/cms/projects/${slug}`),
  createProject: (data: any) => api.post('/cms/projects/', data),
  updateProject: (slug: string, data: any) => api.put(`/cms/projects/${slug}`, data),
  deleteProject: (slug: string) => api.delete(`/cms/projects/${slug}`),

  getBlogPosts: () => api.get('/cms/blog/'),
  getBlogPost: (slug: string) => api.get(`/cms/blog/${slug}`),
  createBlogPost: (data: any) => api.post('/cms/blog/', data),
  updateBlogPost: (slug: string, data: any) => api.put(`/cms/blog/${slug}`, data),
  deleteBlogPost: (slug: string) => api.delete(`/cms/blog/${slug}`),

  getSettings: () => api.get('/cms/settings/'),

  getTeam: () => api.get('/cms/team/'),
  createTeamMember: (data: any) => api.post('/cms/team/', data),
  updateTeamMember: (id: number, data: any) => api.put(`/cms/team/${id}`, data),
  deleteTeamMember: (id: number) => api.delete(`/cms/team/${id}`),

  getTestimonials: () => api.get('/cms/testimonials/'),
  createTestimonial: (data: any) => api.post('/cms/testimonials/', data),
  updateTestimonial: (id: number, data: any) => api.put(`/cms/testimonials/${id}`, data),
  deleteTestimonial: (id: number) => api.delete(`/cms/testimonials/${id}`),

  getFaqs: () => api.get('/cms/faqs/'),
  createFaq: (data: any) => api.post('/cms/faqs/', data),
  updateFaq: (id: number, data: any) => api.put(`/cms/faqs/${id}`, data),
  deleteFaq: (id: number) => api.delete(`/cms/faqs/${id}`),
};

export default api;
