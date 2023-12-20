import React from 'react'

function Button({children, type, onClick}) {
  return (
    <button className={ "btn btn-" + type } onClick={ onClick }>
        { children }
    </button>
  )
}

export default Button