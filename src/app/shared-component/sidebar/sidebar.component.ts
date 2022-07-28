import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('secondMenu', { static: false }) secondMenu!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  activeUrl(url: string) {
    return this.router.url === url
  }

  hideSecondMenu() {
    this.secondMenu.nativeElement.classList.add('d-none')
  }

}
