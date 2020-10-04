import React from 'react'
import PropTypes from 'prop-types'

export default function Button({className, label, handleClick}) {
    return (
        <button className={className} value={label} onClick={handleClick}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired
}