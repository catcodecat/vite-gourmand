import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-wine text-white hover:bg-merlot focus-visible:ring-wine',
  secondary: 'bg-ivory text-wine ring-1 ring-wine/20 hover:bg-white focus-visible:ring-gold',
  ghost: 'text-wine hover:bg-wine/10 focus-visible:ring-wine',
  dark: 'bg-ink text-white hover:bg-charcoal focus-visible:ring-gold'
}

export function Button({ children, to, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
