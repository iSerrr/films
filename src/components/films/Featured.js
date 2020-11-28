import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../App'

const Featured = ({featured, id}) => {
    const {toggleFeatured} = useContext(AppContext)
    const cls = featured ? 'yellow' : 'empty'

    return (
        <span
            className='ui right corner label'>
            <i
                className={`star icon ${cls}`}
                onClick={() => toggleFeatured(id)}
            />
        </span>
    )
}

Featured.propTypes = {
    featured: PropTypes.bool.isRequired
}

export default Featured