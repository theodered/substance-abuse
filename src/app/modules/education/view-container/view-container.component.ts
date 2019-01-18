import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.css']
})
export class ViewContainerComponent implements OnInit {

  sidemenuItems: MenuItem[];

  messages: String[];

  textMsg: string;

  contentCards: Object[];

  constructor() { }

  ngOnInit() {
    this.messages = [];
    this.sidemenuItems = [
      {
        label: 'Substance1', icon: 'fas fa-atom',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance2', icon: 'fas fa-prescription-bottle', items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance3', icon: 'fas fa-atom',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance4', icon: 'fas fa-prescription-bottle',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance6', icon: 'fas fa-atom',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance5', icon: 'fas fa-prescription-bottle',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance7', icon: 'fas fa-atom',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      },
      {
        label: 'Substance8', icon: 'fas fa-prescription-bottle',
        items: [
          { label: 'More Info', icon: 'pi pi-fw pi-plus' },
        ]
      }
    ];

    this.contentCards = [
      {
        "header": "Effects on human body",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod facilisis facilisis. Quisque venenatis lacinia ultrices. Sed ultricies, tortor ac suscipit pretium, erat quam convallis neque, accumsan cursus felis libero vitae erat. Donec at rutrum urna. Integer aliquam tincidunt arcu, vitae gravida risus. Praesent facilisis ligula ut finibus facilisis. Quisque dictum tortor id hendrerit egestas. Vestibulum fermentum quam libero, vel placerat tortor ultricies ut. In sit amet lectus commodo, lobortis eros sed, aliquam libero. Donec ut enim in mi porttitor tempor. Nam tortor ante, hendrerit nec volutpat sed, tristique non risus. Nulla ornare quam vel aliquam iaculis. In sollicitudin lectus in volutpat efficitur. Donec ullamcorper et mi sit amet semper. Quisque sed tempus nulla, id mollis ex.      "
      },
      {
        "header": "Precautions",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod facilisis facilisis. Quisque venenatis lacinia ultrices. Sed ultricies, tortor ac suscipit pretium, erat quam convallis neque, accumsan cursus felis libero vitae erat. Donec at rutrum urna. Integer aliquam tincidunt arcu, vitae gravida risus. Praesent facilisis ligula ut finibus facilisis. Quisque dictum tortor id hendrerit egestas. Vestibulum fermentum quam libero, vel placerat tortor ultricies ut. In sit amet lectus commodo, lobortis eros sed, aliquam libero. Donec ut enim in mi porttitor tempor. Nam tortor ante, hendrerit nec volutpat sed, tristique non risus. Nulla ornare quam vel aliquam iaculis. In sollicitudin lectus in volutpat efficitur. Donec ullamcorper et mi sit amet semper. Quisque sed tempus nulla, id mollis ex.      "
      },
      {
        "header": "Remedies",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod facilisis facilisis. Quisque venenatis lacinia ultrices. Sed ultricies, tortor ac suscipit pretium, erat quam convallis neque, accumsan cursus felis libero vitae erat. Donec at rutrum urna. Integer aliquam tincidunt arcu, vitae gravida risus. Praesent facilisis ligula ut finibus facilisis. Quisque dictum tortor id hendrerit egestas. Vestibulum fermentum quam libero, vel placerat tortor ultricies ut. In sit amet lectus commodo, lobortis eros sed, aliquam libero. Donec ut enim in mi porttitor tempor. Nam tortor ante, hendrerit nec volutpat sed, tristique non risus. Nulla ornare quam vel aliquam iaculis. In sollicitudin lectus in volutpat efficitur. Donec ullamcorper et mi sit amet semper. Quisque sed tempus nulla, id mollis ex.      "
      }
    ]

  }

  sendText(){
    if(this.textMsg) {
      this.messages.push(this.textMsg);
    }
    this.textMsg = "";
  }

}
