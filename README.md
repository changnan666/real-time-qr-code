# real-time-qr-code

用于生成二维码的 react 组件，支持状态变更的即时渲染，同时也支持 img 和 canvas 的两种渲染模式

## UseAge

```powershell
npm install real-time-qr-code
```

```javascript
import QrCode from 'real-time-qr-code'

export default () => {
  return <QrCode text='666' />
}
```

## 扫描自动跳转

给需要添加的地址加上协议即可跳转，其它情况都会展示文本
