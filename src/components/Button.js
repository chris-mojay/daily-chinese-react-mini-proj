import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
        return (
            <button className={props.className} value={props.label} onClick={props.onClick}>
                {props.label}
            </button>
        )
}

Button.propTypes = {
    label: PropTypes.string.isRequired
}