import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  standalone: true,
  animations: [
    trigger('openCloseAlert', [
      state('open', style({
        top: '0px',
        opacity: 1,
        'z-index': 2000
      })),
      state('closed', style({
        top: '40px',
        opacity: 0,
        'z-index': -1
      })),
      transition('closed <=> open', [
        animate(250)
      ])
    ])
  ]
})
export class Toast implements OnInit {
  @Input() color: 'white' | 'black' = 'black';
  @Input() message: string = '';
  @Input() icon: IIcon = {
    library: 'interface-interaction',
    file: 'info-circle.svg'
  };
  open: boolean = true;
  src: string = '';
  srcClose: string = 'icons/interface-interaction/close-exit.svg';

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
  }

  close(): void {
    this.message = '';
    setTimeout(() => {
      this.open = false;
    }, 500);
  }

}
