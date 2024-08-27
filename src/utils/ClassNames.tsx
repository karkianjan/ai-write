
export type ClassValue = string | boolean | undefined | null;

export function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
