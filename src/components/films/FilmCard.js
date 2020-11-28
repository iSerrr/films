import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Featured from './Featured'

import classes from './FilmCard.module.css'

const FilmCard = ({film}) => {
    const [descIsOpen, setDescIsOpen] = useState(false)
    const toggleDesc = () => setDescIsOpen(!descIsOpen)

    return (
        <>
            <div className='ui card'>
            <span className={[classes.front, descIsOpen ? classes.active : 'null'].join(' ')}>
                <span className="ui right corner label">
                    <i className="empty star icon"/>
                </span>
                <div className="image">
                    <span className="ui green label ribbon">{film?.price}</span>
                    <Featured featured={film?.featured} id={film?._id}/>
                    <img src={film?.img} alt={film?.title}/>
                </div>
            </span>
                <span className={[classes.back, descIsOpen ? classes.active : null].join(' ')}>
                 <div className="content">
                <div className="description">
                    <p>{film?.description}</p>
                </div>
            </div>
            </span>
                <div className="extra content">
                <span className="header">
                    {film?.title}
                </span>
                    <div className="meta">
                        <i className="icon users"/> {film?.director}
                        <span className="right floated">
                        <i className="icon wait right"/> {film?.duration}
                    </span>
                    </div>
                    <div className="meta">
                        <i
                            onClick={() => toggleDesc()}
                            className={['icon', 'left', classes.icon, descIsOpen ? 'eye slash' : 'eye'].join(' ')}/>
                    </div>
                </div>
            </div>
        </>
    )
}


FilmCard.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired
    })
}

export default React.memo(FilmCard)
