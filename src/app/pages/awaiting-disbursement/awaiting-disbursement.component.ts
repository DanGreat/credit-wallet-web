import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awaiting-disbursement',
  templateUrl: './awaiting-disbursement.component.html',
  styleUrls: ['./awaiting-disbursement.component.scss']
})
export class AwaitingDisbursementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
