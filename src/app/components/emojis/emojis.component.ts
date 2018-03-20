import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.scss']
})
export class EmojisComponent implements OnInit {
  @Input() visibleEmoji: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
