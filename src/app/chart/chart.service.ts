import { Model } from './../model/model';
import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import issues from './issues';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  list: Model[] = [];

  constructor() { }

  getIssues() {

    this.list = JSON.parse(localStorage.getItem('sgannt:models'));

    const allchildren = this.list.map(
      m => new Item(m.id, m.parentId, m.key, m.name, new Date("2021-08-31 00:00"), null, (m.estimate / (60*60*8)), null, [], m.dependsId)
    ).filter(i => i.parentId !== 0);

    const allFathers = this.list.map(
      m => new Item(m.id, m.parentId, m.key, m.name, new Date("2021-08-31 00:00"), null, (m.estimate / (60*60*8)), null, [], m.dependsId)
    ).filter(i => i.parentId == 0);

    console.log(allFathers.length);

    allFathers.forEach(f => {
      const children = allchildren.filter(c => c.parentId === f.id);
      f.children = children;
    });

    console.log(allFathers.length);

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

    console.log(allFathers.length);
    return allFathers;
  }

  setModel(models: Model[]) {
    localStorage.setItem('sgannt:models', JSON.stringify(models));
  }
}
