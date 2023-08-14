import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import '../node_modules/react-quill/dist/quill.snow.css'
const Test = () => {
    const [convertedText, setConvertedText] = useState('')

  return (
    <div>
      <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
      />
    </div>
  )
}

export default Test