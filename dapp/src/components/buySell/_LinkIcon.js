import React from 'react'

const LinkIcon = ({ color = 'fafbfc' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={`#${color}`} fillRule="nonzero">
          <path
            d="M1149.628 144.216l6.528-6.528v2.368h1.344V135.4h-4.656v1.344h2.368l-6.528 6.528.944.944zm6.528 3.184c.363 0 .677-.133.944-.4.267-.267.4-.581.4-.944V141.4h-1.344v4.656h-9.312v-9.312h4.656V135.4h-4.656c-.373 0-.69.133-.952.4-.261.267-.392.581-.392.944v9.312c0 .363.13.677.392.944.261.267.579.4.952.4h9.312z"
            transform="translate(-1145 -135)"
          />
        </g>
      </g>
    </svg>
  )
}

export default LinkIcon
