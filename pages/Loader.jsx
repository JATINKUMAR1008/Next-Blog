import React from 'react'
import { Loader } from 'rsuite'

import { Oval } from 'react-loader-spinner'
const Loader_bg = () => {
  return (
    <div className='absolute inset-0 bg-black opacity-60 flex items-center justify-center'>
        <Oval
  height={60}
  width={60}
  color="#fff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#fff"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
    </div>
  )
}

export default Loader_bg