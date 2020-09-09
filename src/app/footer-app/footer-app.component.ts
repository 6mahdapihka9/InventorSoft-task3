import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'footer-app',
  template: `
    <footer>
      <p>© Baal x Zul'Jin x Aleksandr Kulesh</p>
    </footer>
  `,
  styles: [`
    footer {
      padding: 100px;
      text-align: center;
    }
    `],
  styleUrls: ['./footer-colors.sass']
})
export class FooterAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
