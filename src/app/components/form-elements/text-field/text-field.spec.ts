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
  // TODO(fase-1): los CVA de string no tienen getter, writeValue no llega al DOM.
  // La clase base lo corrige — poner en true entonces.
  writeValueReflects: false,
});
