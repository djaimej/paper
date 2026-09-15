import { TextBoxGroup } from './text-box-group';
import { runCvaContract } from '@shared/testing/cva-contract';


runCvaContract<string>('TextBoxGroup', {
  component: TextBoxGroup,
  nativeSelector: 'textarea',
  writtenValue: 'hola',
  readView: (el) => el.value,
  userInput: (el) => { el.value = 'hola'; el.dispatchEvent(new Event('input')); return 'hola'; },
});
