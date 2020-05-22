import { PhotoFetchService } from './../photo-fetch.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent implements OnInit {
  randImage = '';

  constructor(private photoService: PhotoFetchService) {
    this.fetchPhoto();

  }

  changePhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getFoto().subscribe( (response) => {
      this.randImage = response.urls.regular;
    });
  }

  ngOnInit() { }

}
