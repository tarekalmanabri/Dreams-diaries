import { getAxios } from "../axios";

export interface DreamData {
  content: string;
  uuid?: string;
}

interface DreamsResponse {
  data: { dreams: DreamData[] };
}
export const dreamApi = {
  async getDreams(): Promise<DreamData[]> {
    let res = await getAxios().get<DreamsResponse>("/dreams");

    return res.data.data.dreams;
  },
  async createNewDream(data: DreamData): Promise<DreamData[]> {
    const res = await getAxios().post("/dreams", {
      data: {
        dreams: [data],
      },
    });

    return res.data.data.dreams;
  },
};
