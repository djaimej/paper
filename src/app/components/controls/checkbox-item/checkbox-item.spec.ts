import { CheckboxItem } from './checkbox-item';
import { runCvaContract } from '@shared/testing/cva-contract';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

runCvaContract<boolean>('CheckboxItem', {
  component: CheckboxItem,
  nativeSelector: 'input[type="checkbox"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => { input.checked = true; input.dispatchEvent(new Event('change')); return true; },
  providers: [...ICON_TEST_PROVIDERS],
});
