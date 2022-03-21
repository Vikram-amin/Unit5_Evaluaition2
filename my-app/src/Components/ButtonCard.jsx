import React from 'react'

function ButtonCard({ handleClick, lable }) {
  return <button onClick={handleClick}> {lable} </button>;
}

export default ButtonCard