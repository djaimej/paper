import { TextFieldIcon } from './text-field-icon';
import { runCvaContract } from '@shared/testing/cva-contract';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

runCvaContract<string>('TextFieldIcon', {
  component: TextFieldIcon, nativeSelector: 'input', writtenValue: 'hola',
  readView: (el) => el.value,
  userInput: (el) => { el.value = 'hola'; el.dispatchEvent(new Event('input')); return 'hola'; },
  providers: [...ICON_TEST_PROVIDERS],
});
