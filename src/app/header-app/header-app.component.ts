import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css', './burgerMenuAnimation.sass', './header-colors.sass']
})

export class HeaderAppComponent implements OnInit {

  constructor() {

  }
  openedBurgerMenu = false;

  @Input() openedContent: boolean;
  @Output() openedContentChange = new EventEmitter<string>();

  openContent = (op: boolean) => {
    this.openedContent = op;
    // @ts-ignore
    this.openedContentChange.emit(op);
  }
  openBurger = () => {
    const socialMedia = document.getElementById('social-media');
    const burgerMenu = document.getElementById('burgerMenu');

    if (this.openedBurgerMenu) {
      socialMedia.classList.remove('social-media-opened');
      burgerMenu.classList.remove('burgerMenu-opened');
    } else {
      socialMedia.classList.add('social-media-opened');
      burgerMenu.classList.add('burgerMenu-opened');
    }
    this.openedBurgerMenu = !this.openedBurgerMenu;
  }

  ngOnInit(): void {

  }

}
