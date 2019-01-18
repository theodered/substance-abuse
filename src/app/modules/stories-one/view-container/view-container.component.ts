import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {
  constructor() { }

  cards = [
    {
      name: 'Person 1',
      story: 'Some quick example text to build on the card title and make up the bulk of the card content',
      profession: 'Profession',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'
    },
    {
      name: 'Person 3',
      story: 'Some quick example text to build on the card title and make up the bulk of the card content',
      profession: 'Profession',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg'
    },
    {
      name: 'Person 4',
      story: 'Some quick example text to build on the card title and make up the bulk of the card content',
      profession: 'Profession',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg'
    },
    {
      name: 'Person 5',
      story: 'Some quick example text to build on the card title and make up the bulk of the card content',
      profession: 'Profession',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg'
    },
  ];
  slides: any = [];
  chunk(arr) {
    let R = [];
    for (let i = 0, len = arr.length; i < len;i++) {
      R.push(arr[i]);
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards);
  }
}
