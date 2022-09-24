import React from 'react'
import classes from './normalButton.module.css'

const NormalButton = ({ name }) => {
  return (
    <button className={classes.btn} style={{ width: '100%' }}>
      {name}
    </button>
  )
}

export default NormalButton
