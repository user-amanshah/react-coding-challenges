import React from 'react'

export default function SecondRoute(props) {
    const {mode} = props
    
    return <div className={`app ${mode? "dark-mode": ""}`}>
      <h1 style={{height: "100vh", fontSize: '100px'}}>
        Second Route just to check app color mode
      </h1>
  </div>
}