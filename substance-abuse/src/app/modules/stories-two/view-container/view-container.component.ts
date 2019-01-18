import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {

  stories: Object[];
  constructor() { }

  ngOnInit() {
    this.stories = [
      {
        'header': 'Story1',
        'content': 'Cras ac metus molestie, efficitur urna imperdiet',
        'image': 'assets/story1.jpg'
      },
      {
        'header': 'Story2',
        'content': 'Praesent pretium at ipsum sed lobortis. ',
        'image': 'assets/story2.jpg'
      },
      {
        'header': 'Story3',
        'content': 'Cras ac metus molestie, efficitur urna imperdiet, commodo neque.',
        'image': 'assets/story3.jpg'


      }
    ]
  }

  generateStyle(i: number) {
    return {
      'padding-top': i * 20 + '%',
    }
  }

  getBackgroundForCard(i: number) {
    if (i % 2 === 0) {
      return;
    }
    return { 'background' : 'blue'}
  }

}
