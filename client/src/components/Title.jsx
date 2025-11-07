import React from 'react'

const Title = ({title,desc}) => {
  return (
    <>
      <h2 className='text-3xl sm:text-5xl font-medium'>{title}</h2>
      <p className='max-w-lg text-center font-extrabold text-gray-500 mb-6 dark:text-white/70'> {desc} </p>
    </>
  )
}

export default Title
