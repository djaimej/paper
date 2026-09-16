import { Switch } from './switch';
import { runCvaContract } from '@shared/testing/cva-contract';

runCvaContract<boolean>('Switch', {
  component: Switch,
  nativeSelector: 'input[type="checkbox"]',
  writtenValue: true,
  readView: (input) => input.checked,
  userInput: (input) => { input.checked = true; input.dispatchEvent(new Event('change')); return true; },
});
