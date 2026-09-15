import { TextField } from './text-field';
import { runCvaContract } from '@shared/testing/cva-contract';

runCvaContract<string>('TextField', {
  component: TextField,
  nativeSelector: 'input',
  writtenValue: 'hola',
  readView: (input) => input.value,
  userInput: (input) => {
    input.value = 'hola';
    input.dispatchEvent(new Event('input'));
    return 'hola';
  },
  // writeValueReflects ya no hace falta: la base lo refleja.
});
