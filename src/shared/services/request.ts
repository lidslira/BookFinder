import api from '~/shared/services/api';

export default {
  async get(path?: string, params?: string, id?: string) {
    const url = `${path}${params ? `?q=${params}` : ''}${id ? `/${id}` : ''}`;

    return api.get(url);
  },
};
