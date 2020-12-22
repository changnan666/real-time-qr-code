import React, { useState } from 'react'

import ExampleComponent from 'real-time-qr-code'

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}

const App = () => {
  const [value, setValue] = useState('Hello World')
  const [code, setCode] = useState('Hello World')

  const onClick = () => {
    setCode(value)
  }

  return (
    <div style={style}>
      <div style={{ margin: '50px auto' }}>
        <ExampleComponent text={code} />
      </div>
      <div>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={onClick}>更新二维码</button>
        <button
          onClick={() => {
            setCode('https://www.bilibili.com/')
            setValue('https://www.bilibili.com/')
          }}
        >
          可跳转
        </button>
      </div>
    </div>
  )
}

export default App
