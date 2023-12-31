import React from 'react'

const Sidebar = () => {
  return (
    <div className=' h-screen flex flex-col w-80'>
        <h1 className=" text-primary-color w-full text-3xl text-center mt-10 font-semibold">LOGO</h1>
        <div className=' menu-item flex text-lg mt-10 bg-blue-100 border-blue-600 border-r-4 p-4'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V11.9091C2 12.4614 2.44771 12.9091 3 12.9091H10.0909C10.6432 12.9091 11.0909 12.4614 11.0909 11.9091V3C11.0909 2.44772 10.6432 2 10.0909 2H3ZM9.27273 3.81818H3.81818V11.0909H9.27273V3.81818Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9092 11.0909C13.3569 11.0909 12.9092 11.5386 12.9092 12.0909V21C12.9092 21.5523 13.3569 22 13.9092 22H21.0001C21.5524 22 22.0001 21.5523 22.0001 21V12.0909C22.0001 11.5386 21.5524 11.0909 21.0001 11.0909H13.9092ZM20.1819 12.9091H14.7274V20.1818H20.1819V12.9091Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9092 2C13.3569 2 12.9092 2.44772 12.9092 3V8.27273C12.9092 8.82501 13.3569 9.27273 13.9092 9.27273H21.0001C21.5524 9.27273 22.0001 8.82501 22.0001 8.27273V3C22.0001 2.44772 21.5524 2 21.0001 2H13.9092ZM20.1819 3.81818H14.7274V7.45455H20.1819V3.81818Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.7273C2.44772 14.7273 2 15.175 2 15.7273V21C2 21.5523 2.44771 22 3 22H10.0909C10.6432 22 11.0909 21.5523 11.0909 21V15.7273C11.0909 15.175 10.6432 14.7273 10.0909 14.7273H3ZM9.27273 16.5455H3.81818V20.1818H9.27273V16.5455Z" fill="#545454"/>
</svg>
<p className=' text-blue-600'>Songs</p>
        </div>
    </div>
  )
}

export default Sidebar