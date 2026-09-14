import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  standalone: true
})
export class Toast implements OnInit {
  @Input() color: 'white' | 'black' = 'black';
  @Input() message: string = '';
  @Input() icon: IIcon = {
    library: 'interface-interaction',
    file: 'info-circle.svg'
  };
  visible = signal(true);
  src: string = '';
  srcClose: string = 'icons/interface-interaction/close-exit.svg';

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
  }

  close(): void {
    this.visible.set(false);
  }
}
