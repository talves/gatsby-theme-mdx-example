import React from 'react'

const Wave = () => {
  const [wave, setWave] = React.useState(0)

  return (
    <button
      onClick={() => setWave(wave + 1)}
    >
      {`You've waved ${wave} time${wave === 1 ? '' : 's'} 👋`}
    </button>
  )
}

export default Wave
