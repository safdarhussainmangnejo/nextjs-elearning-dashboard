declare module 'numeral' {
    interface Numeral {
      format(formatString?: string): string;
      value(): number;
      set(value: number): Numeral;
      add(value: number): Numeral;
      subtract(value: number): Numeral;
      multiply(value: number): Numeral;
      divide(value: number): Numeral;
      difference(value: number): number;
    }
  
    interface NumeralStatic {
      (input?: any): Numeral;
      version: string;
      isNumeral(value: any): boolean;
      locale(key?: string): string;
      zeroFormat(format: string): void;
      nullFormat(format: string): void;
      defaultFormat(format: string): void;
      clone(): NumeralStatic;
      register(type: string, name: string, format: any): void;
    }
  
    const numeral: NumeralStatic;
    export default numeral;
  }
  