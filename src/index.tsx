import React, { useEffect, useRef } from 'react'
import './qrcode.min.js'

let qr: QRCode | null = null

interface IProps {
  /** 扫码后的结果
   *  如果需要扫码跳转，跳转的地址加上协议即可，比如：http://www.baidu.com。
   *  如果写成 www.baidu.com，就只是显示文本
   */
  text: string
  width?: number
  height?: number
  mode?: 'img' | 'canvas'
}

export default (options: IProps) => {
  const container = useRef(null)

  useEffect(() => {
    if (container && container.current) {
      // @ts-ignore
      container.current!.innerHTML = ''

      if (qr) {
        qr.makeCode(options.text)
      } else {
        qr = new QRCode(container.current!, options)
      }
    }

    return () => {
      qr!.clear()
      qr = null
    }
  }, [container, options])

  return <div ref={container} style={{ fontSize: 0 }} />
}
