import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date!: number;

  getDate() {
    return new Date().getFullYear();
  }

  ngOnInit(): void {
    this.date = this.getDate()
  }
}
