import React from 'react'
import PropTypes from 'prop-types'

const Message = ({msg, type, color}) => {
    return (
        <div className={`ui icon ${color} message`}>
            <i className={`icon ${type}`}/>
            <div className='header'>{msg}</div>
        </div>
    )
}

Message.defaultProps = {
    type: 'info',
    color: 'olive',
}

Message.propTypes = {
    msg: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
}

export default Message