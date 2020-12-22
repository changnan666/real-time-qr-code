/// <reference types="react-scripts" />

declare namespace QRCode {
  export interface Options {
    text: string
    width?: number
    height?: number
    mode?: 'img' | 'canvas'
  }
}

declare class QRCode {
  constructor(container: HTMLElement, options: QRCode.Options)
  clear: () => void
  makeCode: (text: string) => void
}
