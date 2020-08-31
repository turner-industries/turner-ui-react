import {DropdownOption} from '../../index.d';

export const getEmptyStringDropdownOption = (): DropdownOption<string> => ({
  text: '(none)',
  value: '',
});
