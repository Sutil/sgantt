export interface Model {
  key: string;
  id: number;
  parentId: number;
  name: string;
  estimate: number;
  dependsId?: number;
  type: string;
  assignee?: string,
  erro?: string;
}
