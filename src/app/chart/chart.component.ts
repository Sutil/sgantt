import { ItemSearch } from './../model/item-search';
import { ChartService } from './chart.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Item } from '../model/item';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  modalRef: BsModalRef;

  items: Item[] = [
  ];

  allIssues: ItemSearch[] = [];

  currentSearch = '';

  itemSelected: Item;

  constructor(private chartService: ChartService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.items = this.chartService.getIssues();

    this.populateAllIssues();
  }

  populateAllIssues() {
    this.populateByItemList(this.items);
  }

  populateByItemList(items: Item[]) {
    items.forEach(i => {
      this.allIssues.push({... i, search: i.key + ' ' + i.name});
      if(i.children && i.children.length > 0) {
        this.populateByItemList(i.children);
      }
    });
  }

  openModal(template: TemplateRef<any>, item: Item) {
    console.log(item.key);
    this.itemSelected = item;
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  onSelectDependent(event) {
    console.log(event);
    const dep = event.item;
    const findedDep = this.deepSearch(this.items, dep.key);
    console.log(findedDep);
    this.itemSelected.depends = findedDep;
    this.currentSearch = null;
    this.closeModal();
  }

  deepSearch(items: Item[], key: string) {
    const finded = items.find(i => i.key === key);

    if(finded) {
      return finded;
    }

    for(let i = 0; i < items.length; i++) {
      const current = items[i];
      if(current.children && current.children.length > 0) {
        const finded = this.deepSearch(current.children, key);
        if(finded) {
          return finded;
        }
      }
    }
    return null;
  }

}
