// Custom Hooks
export type UseDebounce = (fn: () => void, ms?: number, args?: any[]) => void;

// Custom Utilities
export type DropdownOption<T> = {
  value: T;
  text: string;
};
