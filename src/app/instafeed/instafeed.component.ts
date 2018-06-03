import { Component, OnInit } from '@angular/core';
import { IgService } from '../ig.service';

@Component({
  selector: 'app-ig-feed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.css']
})
export class InstafeedComponent implements OnInit {

  mediaRecent: any;

  constructor(private igService: IgService) {
  }

  ngOnInit() {
    this.getMediaRecent();
  }

  getMediaRecent() {
    this.igService.getMediaRecent()
      .subscribe(result => this.mediaRecent = result);
  }
}
