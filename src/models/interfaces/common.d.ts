export interface FormState<T> {
  errors?: T;
  message?: string | null;
}
export interface ById {
  id: string;
}
export interface OptionType {
  value: string;
  label: string;
}
