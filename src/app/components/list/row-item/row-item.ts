import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-row-item',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './row-item.html',
  styleUrl: './row-item.scss',
  standalone: true
})
export class RowItem implements OnInit {
  @Input() icon!: IIcon;
  @Input() padding: boolean = false;
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() action: string = '';
  @Output() onAction = new EventEmitter();
  src: string = ''

  ngOnInit(): void {
    if (this.icon?.file) {
      this.src = `icons/${this.icon.library}/${this.icon.file}`;
    }
  }
}
