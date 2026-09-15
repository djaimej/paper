import { TextFieldGroup } from './text-field-group';
import { runCvaContract } from '@shared/testing/cva-contract';

runCvaContract<string>('TextFieldGroup', {
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
