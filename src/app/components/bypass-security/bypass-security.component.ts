import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.scss']
})
export class BypassSecurityComponent implements OnInit {

  @Input() public msg: string;
  @Input() public id: number;
  public newString: any;

  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    }

  ngOnInit() {
    if(this.msg) {
      this.newString = this.sanitizer.bypassSecurityTrustHtml(this.msg);
    }
  }

}
