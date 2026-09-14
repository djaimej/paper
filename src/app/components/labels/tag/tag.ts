import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-tag',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
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
export class Tag {
  @Input() disipable: boolean = false;
  @Input() type: 'white' | 'black' = 'white';
  @Input() text: string = '';
  open: boolean = true;
  src: string = '';
  srcClose: string = '';

  ngOnInit(): void {
    this.srcClose = `icons/${INTERFACE_INTERACTION.clearX.library}/${INTERFACE_INTERACTION.clearX.file}`;
  }

  close(): void {
    this.text = '';
    setTimeout(() => {
      this.open = false;
    }, 500);
  }
}
