import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  pageTitle: string;
  pageAvatar: string;

  constructor() { }

  ngOnInit() {
    this.pageTitle = 'Avatar';
    this.pageAvatar = '/assets/stan-lee.jpg';
  }

}
