import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  chapters = [
    { id: 1, title: 'Chapter 1' },
    { id: 2, title: 'Chapter 2' },
  ];

  constructor() { }

  ngOnInit() {
  }
}
