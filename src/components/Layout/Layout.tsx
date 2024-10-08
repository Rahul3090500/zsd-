import React from 'react'
import  Header from './Header'
import HomePage from './HomePage'
import EnquiryForm from '../EnquiryForm'
import Head from 'next/head'
import Section from './Section'
import Marquee from '../Marquee'

  interface LayoutProps {
    setFormVisible: any;
    isFormVisible:boolean
  }
  
  
const Layout :React.FC <LayoutProps>= ({setFormVisible,isFormVisible}) => {
  return (
    <>
    <Head>
        <title>vijay offset press</title>
        <meta
          name="description"
          content="vijayoffsetpress"
        />
    </Head>
    <div className=' w-95 h-screen  bg-black'>
    <div className='mx-6'>
        <Section setFormVisible={setFormVisible}/>
    </div>
    <div className='h-48 w-95 bg-black'>
    </div>
    </div>
    </>
  )
}

export default Layout
