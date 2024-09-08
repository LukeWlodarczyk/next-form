// global.d.ts or types/global.d.ts
export {};

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}
