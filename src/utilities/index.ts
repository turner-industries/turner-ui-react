import {DropdownOption} from '../types/index';

export const getEmptyStringDropdownOption = (): DropdownOption<string> => ({
  text: '(none)',
  value: '',
});
