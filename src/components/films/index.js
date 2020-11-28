import React from 'react'
import FilmCard from './FilmCard'
import PropTypes from 'prop-types'
import Message from './Message'

const FilmList = ({films}) => (
    <div className='ui four cards'>
        {films.length === 0 ? (
            <Message msg='No films in oru base yet' type='star outline'/>
        ) : (
            films.map(film => (<FilmCard key={film._id} film={film}/>))
        )
        }
    </div>
)

FilmList.defaultProps = {
    films: []
}

FilmList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FilmList