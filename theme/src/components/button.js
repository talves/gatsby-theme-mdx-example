import React from 'react'

const Button = ({ myCoolText }) => {
  return (
    <button onClick={() => alert(myCoolText || 'You Clicked!!!')}>
      Click me hard!
    </button>
  )
}

export default Button
