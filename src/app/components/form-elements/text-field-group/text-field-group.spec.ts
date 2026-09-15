import { TextFieldGroup } from './text-field-group';
import { runCvaContract } from '@shared/testing/cva-contract';

runCvaContract<string>('TextField', {
  component: TextFieldGroup,
  nativeSelector: 'input',
  writtenValue: 'hola',
  readView: (input) => input.value,
  userInput: (input) => {
    input.value = 'hola';
    input.dispatchEvent(new Event('input'));
    return 'hola';
  },
});
