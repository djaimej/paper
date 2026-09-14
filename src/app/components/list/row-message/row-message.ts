import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-row-message',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './row-message.html',
  styleUrl: './row-message.scss',
  standalone: true
})
export class RowMessage {
  @Input() imageSrc: string = '';
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Output() onAction = new EventEmitter();
  src: string = 'icons/imaging/image.svg';
}
