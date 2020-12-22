import React, { useEffect, useState } from 'react'

import ExampleComponent from 'real-time-qr-code'

const App = () => {
  const [msg, setMsg] = useState('1')

  useEffect(() => {
    setTimeout(() => {
      setMsg(msg + '1')
    }, 1000)
  }, [msg])

  return <ExampleComponent text={msg} />
}

export default App
