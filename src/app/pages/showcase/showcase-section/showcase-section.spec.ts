import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ShowcaseSection } from './showcase-section';

@Component({
  imports: [ShowcaseSection],
  template: `<app-showcase-section title="Buttons" description="Do things"><button>Go</button></app-showcase-section>`,
})
class Host { }

describe('ShowcaseSection', () => {
  it('renders title, description and projected content', () => {
    TestBed.configureTestingModule({ imports: [Host] });
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Buttons');
    expect(text).toContain('Do things');
    expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
  });
});
