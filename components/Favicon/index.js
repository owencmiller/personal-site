import React from 'react'
import {
  Favicon as FaviconStyled,
} from './styles'

const Favicon = () => (
  <FaviconStyled
    rel="icon"
    type="image/png"
    sizes="32x32"
    // eslint-disable-next-line max-len
    href="https://s3.us-east-2.amazonaws.com/www.owenmiller.me/O.png"
  />
)

export default Favicon
