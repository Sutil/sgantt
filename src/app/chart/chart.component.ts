import { ChartService } from './chart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  items: Item[] = [
  ];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.items = this.chartService.getIssues();
    console.log('recebido>>>>>>>>>>>', this.items);
  }

}
