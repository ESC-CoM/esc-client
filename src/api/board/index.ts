import { http } from '../core';

export const getMeetingListRegisteredByMe =
  async (): Promise<res.BoardListRegisteredByMe> => {
    const {
      data: { data },
    } = await http.get('/api/board/me');

    return data;
  };
