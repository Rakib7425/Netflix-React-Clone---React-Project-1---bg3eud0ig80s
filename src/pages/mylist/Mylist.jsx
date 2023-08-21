import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './style.scss'

const Mylist = () => {
    return (
        <ContentWrapper>
            <div className='_main_'>
                <h1 className='pageTitle'>
                    Mylist
                </h1>
                <h1 style={{ color: 'red' }}>Working on this Page</h1>
            </div>
        </ContentWrapper>
    )
}

export default Mylist;