import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import issues from './issues';

interface Model {
  key: string,
  id: number,
  parentId: number,
  name: string,
  estimate: number,
  dependsId?: number
}

@Injectable()
export class ChartService {

  constructor() { }

  getIssues() {
    const list: Model[] = issues;

    const allchildren = list.map(
      m => new Item(m.id, m.parentId, m.key, m.name, new Date("2021-08-31 00:00"), null, (m.estimate / (60*60*8)), null, [], m.dependsId)
    ).filter(i => i.parentId !== 0);

    const allFathers = list.map(
      m => new Item(m.id, m.parentId, m.key, m.name, new Date("2021-08-31 00:00"), null, (m.estimate / (60*60*8)), null, [], m.dependsId)
    ).filter(i => i.parentId == 0);

    allFathers.forEach(f => {
      const children = allchildren.filter(c => c.parentId === f.id);
      f.children = children;
    });

    allchildren.forEach(c => {
      if(c.dependsId) {
        const dep = allchildren.find(d => d.id === c.dependsId);
        c.depends = dep;

        const depf = allFathers.find(d => d.id === c.dependsId);
        c.depends = depf;
      }
    });

    allFathers.forEach(f => {
      if(f.dependsId) {
        const dep = allchildren.find(d => d.id === f.dependsId);
        f.depends = dep;

        const depf = allFathers.find(d => d.id === f.dependsId);
        f.depends = depf;
      }
    });

    return allFathers;
  }
}
