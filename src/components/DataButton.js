import React from 'react'

export default function DataButton({ hanClik, val }) {
    return (
        <button onClick={() => hanClik(val)}>{val.name}</button>
    )
}

