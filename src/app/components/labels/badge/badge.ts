import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-badge',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
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
export class Badge implements OnInit {
  @Input() icon: IIcon = INTERFACE_INTERACTION.check;
  @Input() type: 'default' | 'white' | 'black' = 'default';
  @Input() text: string = '';
  open: boolean = true;
  src: string = '';
  srcClose: string = '';

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
    this.srcClose = `icons/${INTERFACE_INTERACTION.clearXSolid.library}/${INTERFACE_INTERACTION.clearXSolid.file}`;
  }

  close(): void {
    this.text = '';
    setTimeout(() => {
      this.open = false;
    }, 500);
  }
}
