import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createAt: string;

  loveItNumber: number = 0;
  dontLoveItNumber: number = 0;

  today = new Date;

  constructor() { }

  ngOnInit() {
  }

  isLoveIts() {
    return this.loveItNumber >= this.dontLoveItNumber;
  }

  incrementeLoveIts() {
    console.log("loveits =================");
    this.loveItNumber = this.loveItNumber + 1;
    console.log("loveits =================", this.loveItNumber);
  }

  incrementeDontLoveIts() {
    this.dontLoveItNumber = this.dontLoveItNumber + 1;
    console.log("dontloveit =================", this.dontLoveItNumber);
  }

}
