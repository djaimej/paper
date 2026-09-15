import { RadioItem } from './radio-item';
import { runCvaContract } from '@shared/testing/cva-contract';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

runCvaContract<boolean>('RadioItem', {
  component: RadioItem,
  nativeSelector: 'input[type="radio"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => { input.checked = true; input.dispatchEvent(new Event('change')); return true; },
  providers: [...ICON_TEST_PROVIDERS],
});
