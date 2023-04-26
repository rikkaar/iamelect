import React, { Component } from 'react'
import { render } from 'react-dom'
import cx from 'classnames'
import data from '../data'
import NonPassiveTouchTarget from '../NonPassiveTouchTarget'
import TouchCarousel, { clamp } from '../../src'
import touchWithMouseHOC from '../../src/touchWithMouseHOC'

const query = window.location.search.slice(1)
const enableLoop = /\bloop\b/.test(query)
const enableAutoplay = /\bautoplay\b/.test(query)

const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function CarouselContainer (props) {
    const { cursor, carouselState: { active, dragging }, ...rest } = props
    let current = -Math.round(cursor) % data.length
    while (current < 0) {
        current += data.length
    }
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
    return (
        <NonPassiveTouchTarget
            className={cx(
                'carousel-container',
                {
                    'is-active': active,
                    'is-dragging': dragging
                }
            )}
        >
            <NonPassiveTouchTarget
                className='carousel-track'
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                {...rest}
            />
        </NonPassiveTouchTarget>
    )
}

const Container = touchWithMouseHOC(CarouselContainer)

class App extends Component {
    renderCard (index, modIndex) {
        const item = data[modIndex]
        return (
            item
        )
    }

    render () {

    }
}