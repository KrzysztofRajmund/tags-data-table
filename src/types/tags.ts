export type Tag = {
  name: string;
  count: number;
};

export type GetTagsApiResponse = {
  items: Tag[];
  has_more: boolean;
  page: number;
  page_size: number;
  total: number;
};

export type GetTagsApiArgs = {
  page?: number;
  limit?: number;
  order?: string;
  sort?: string;
};
