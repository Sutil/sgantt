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

  constructor(private chartService: ChartService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.items = this.chartService.getIssues();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

}
