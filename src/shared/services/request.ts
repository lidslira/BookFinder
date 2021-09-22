import api from '~/shared/services/api';

interface ParamsProps {
  text: string;
  index: number;
}

export default {
  async get(path?: string, params?: ParamsProps, id?: string) {
    const url = `${path}${
      params ? `?q=${params.text}&startIndex=${params.index}` : ''
    }${id ? `/${id}` : ''}`;

    return api.get(url);
  },
};
