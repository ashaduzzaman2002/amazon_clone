import React from 'react'
import {Alert} from 'react-bootstrap'


const MessageBox = ({variant, message}) => {
  return (
    <div>
        <Alert variant={variant || 'info'}>{message}</Alert>
    </div>
  )
}

export default MessageBox