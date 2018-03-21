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
  @Output('triggerVisibleEmoji') triggerVisibleEmoji = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    $(document).ready(() => {
      $(document).keyup((e) => {
        if (e.which == 27) {
          this.visibleEmoji = false;
          this.triggerVisibleEmoji.emit(false);
        }
      });
    });
  }

  selectIcon(event: any) {
    event.preventDefault();
    if ($('.icon-list  .' + event.target.className.split(' ')[1]).length > 1) {
      let icon = $('.icon-list .' + event.target.className.split(' ')[1]).eq(1).data('name');
      this.selectedIcon = icon ? icon != 'undefined' ? icon : null : null;
    } else {
      let icon = $('.icon-list .' + event.target.className.split(' ')[1]).data('name');
      this.selectedIcon = icon ? icon != 'undefined' ? icon : null : null;
    }
    if (this.selectedIcon) {
      this.triggerSelectedIcon.emit(this.selectedIcon);
    }
  }
}
