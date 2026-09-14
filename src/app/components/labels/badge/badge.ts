import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-badge',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  standalone: true
})
export class Badge implements OnInit {
  @Input() icon: IIcon = INTERFACE_INTERACTION.check;
  @Input() type: 'default' | 'white' | 'black' = 'default';
  @Input() text: string = '';
  visible = signal(true);
  src: string = '';
  srcClose: string = '';

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
    this.srcClose = `icons/${INTERFACE_INTERACTION.clearXSolid.library}/${INTERFACE_INTERACTION.clearXSolid.file}`;
  }

  close(): void {
    this.visible.set(false);
  }
}
