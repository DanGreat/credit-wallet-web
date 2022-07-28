import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incomplete-actions',
  templateUrl: './incomplete-actions.component.html',
  styleUrls: ['./incomplete-actions.component.scss']
})
export class IncompleteActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
