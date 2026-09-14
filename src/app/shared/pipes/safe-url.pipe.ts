import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {
  public constructor(private _domSanitizer: DomSanitizer) {}

  public transform(unsafeUrl: string): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
}
