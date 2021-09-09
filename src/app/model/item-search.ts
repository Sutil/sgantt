
export interface ItemSearch {

  id: number,
  parentId: number,
  key: string,
  name: string,
  startDate: Date,
  endDate: Date,
  duration?: number
  search: string;

}

