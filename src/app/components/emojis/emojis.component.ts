import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.scss']
})
export class EmojisComponent implements OnInit {
  @Input() public visibleEmoji: boolean = false;
  @Input('selectedIcon') public selectedIcon: string = '';
  @Output('triggerSelectedIcon') triggerSelectedIcon = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  selectIcon(event: any) {
    event.preventDefault();
    console.log('hello here');
    this.selectedIcon = $('.' + event.target.className.split(' ')[1]).data('name');
    this.triggerSelectedIcon.emit(this.selectedIcon);
  }
}
