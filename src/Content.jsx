import React from 'react';
import './Content.css'

const Content = ({ titulo, children }) => {
    // para receber os filhos de uma tag children

    return(
        <article className='content'>
            <h2>{titulo}</h2>
            {children}
        </article>
    )
}

export default Content