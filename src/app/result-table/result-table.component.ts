import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Result} from "../../result";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  @Input() result: Result[] = [];

  @Input() selectedIndex?: number;
  @Output() selectedIndexChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedIndex(index: number) {
    this.selectedIndexChange.emit(index);
  }
}
