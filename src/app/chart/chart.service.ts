import { Member } from './../model/member';
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


    this.list = JSON.parse(localStorage.getItem('sgantt:models'));

    const date = new Date(JSON.parse(localStorage.getItem('sgantt:startDate')));
    let members: Member[] = JSON.parse(localStorage.getItem('sgantt:members'));

    if(!members) {
      members = [];
    }

    const allchildren = this.list.map(
      m => {
        const memberFinded = members.find( member => member.name === m.assignee);

        return new Item(m.id, m.parentId, m.key, m.name, date, null, (m.estimate / (60*60*8)), null, [], m.dependsId, null, memberFinded);
      }
    ).filter(i => i.parentId !== 0);

    const allFathers = this.list.map(
      m => {
        const memberFinded = members.find( member => member.name === m.assignee);

        return new Item(m.id, m.parentId, m.key, m.name, date, null, (m.estimate / (60*60*8)), null, [], m.dependsId, null, memberFinded);
      }
    ).filter(i => i.parentId == 0);


    allFathers.forEach(f => {
      const children = allchildren.filter(c => c.parentId === f.id);
      f.children = children;
    });

    allchildren.forEach(c => {
      if(c.dependsId) {
        const dep = allchildren.find(d => d.id === c.dependsId);
        if(dep) {
          c.depends = dep;
        }

        const depf = allFathers.find(d => d.id === c.dependsId);
        if(depf){
          c.depends = depf;
        }
      }
    });

    allFathers.forEach(f => {
      if(f.dependsId) {
        const dep = allchildren.find(d => d.id === f.dependsId);
        if(dep) {
          f.depends = dep;
        }

        const depf = allFathers.find(d => d.id === f.dependsId);
        if(depf) {
          f.depends = depf;
        }
      }
    });

    return allFathers;
  }

  setModel(models: Model[], date: Date) {
    localStorage.setItem('sgantt:startDate', JSON.stringify(date));
    localStorage.setItem('sgantt:models', JSON.stringify(models));
  }
}
