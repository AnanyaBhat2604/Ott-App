import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='auth-bg center-div'>
      <div className='z-[1] relative bg-slate-400'>{children}</div>
    </div>
  )
}

export default Layout