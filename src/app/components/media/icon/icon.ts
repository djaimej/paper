import { Component, Input, OnInit } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { Size } from '@models/types/properties';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-icon',
  imports: [AngularSvgIconModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  standalone: true
})
export class Icon implements OnInit {
  @Input() icon: IIcon = INTERFACE_INTERACTION.star;
  @Input() size: Size = 'md';
  src: string = '';

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
  }
}
