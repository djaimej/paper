import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { Checkbox } from './checkbox';
import { runCvaContract } from '@shared/testing/cva-contract';

runCvaContract<boolean>('Checkbox', {
  component: Checkbox,
  nativeSelector: 'input[type="checkbox"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => {
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    return true;
  },
  providers: [provideAngularSvgIcon(), provideHttpClient(), provideHttpClientTesting()],
});
