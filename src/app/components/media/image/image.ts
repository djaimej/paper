import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-image',
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './image.html',
  styleUrl: './image.scss',
  standalone: true
})
export class Image implements OnInit {
  @Input() type: 'square' | 'circle' | 'skeleton' = 'square';
  @Input() subtle: boolean = false;
  @Input() size: number = 50;
  @Input() aspectRatio: number = 1;
  src: string = '';

  constructor() {}

  ngOnInit(): void {
    this.src = this.type === 'skeleton' ? 'media/skeleton.svg' : 'icons/imaging/image.svg';
    this.aspectRatio = this.type === 'skeleton' ? 1 : this.aspectRatio;
  }
}
