import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-tag',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  standalone: true
})
export class Tag implements OnInit {
  @Input() disipable: boolean = false;
  @Input() type: 'white' | 'black' = 'white';
  @Input() text: string = '';
  visible = signal(true);
  srcClose: string = '';

  ngOnInit(): void {
    this.srcClose = `icons/${INTERFACE_INTERACTION.clearX.library}/${INTERFACE_INTERACTION.clearX.file}`;
  }

  close(): void {
    this.visible.set(false);
  }
}
