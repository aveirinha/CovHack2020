import React from 'react'

import './Button.scss'

import { Link } from 'gatsby'

const InnerButton = props => (
  <div
    className={
      `button button--large header-font` +
      (props.primary ? ' primary ' : ' ') +
      (props.className || '')
    }
    style={props.style || {}}
    onClick={props.onClick}>
    <span>{props.children}</span>
  </div>
)

export const Button = props => {
  return (
    <React.Fragment>
      {props.internal ? (
        <Link to={props.to}>
          <InnerButton {...props} />
        </Link>
      ) : (
        <a href={props.to}>
          <InnerButton {...props} />
        </a>
      )}
    </React.Fragment>
  )
}
