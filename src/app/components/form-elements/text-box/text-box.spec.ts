import { TextBox } from './text-box';
import { runCvaContract } from '@shared/testing/cva-contract';

runCvaContract<string>('TextBox', {
  component: TextBox,
  nativeSelector: 'textarea',
  writtenValue: 'hola',
  readView: (el) => el.value,
  userInput: (el) => {
    el.value = 'hola';
    el.dispatchEvent(new Event('input'));
    return 'hola';
  },
});
