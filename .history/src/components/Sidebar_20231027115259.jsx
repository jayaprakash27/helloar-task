import React from 'react'

const Sidebar = () => {
  return (
    <div className=' h-screen flex flex-col w-60'>
        <div className=' w-full'>
        <h1 className=" text-primary-color w-full text-3xl text-center mt-10 font-semibold">LOGO</h1>
        <div className=' menu-item flex items-center gap-2 text-lg mt-10 bg-blue-100 border-blue-600 border-r-4 p-4'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V11.9091C2 12.4614 2.44771 12.9091 3 12.9091H10.0909C10.6432 12.9091 11.0909 12.4614 11.0909 11.9091V3C11.0909 2.44772 10.6432 2 10.0909 2H3ZM9.27273 3.81818H3.81818V11.0909H9.27273V3.81818Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9092 11.0909C13.3569 11.0909 12.9092 11.5386 12.9092 12.0909V21C12.9092 21.5523 13.3569 22 13.9092 22H21.0001C21.5524 22 22.0001 21.5523 22.0001 21V12.0909C22.0001 11.5386 21.5524 11.0909 21.0001 11.0909H13.9092ZM20.1819 12.9091H14.7274V20.1818H20.1819V12.9091Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9092 2C13.3569 2 12.9092 2.44772 12.9092 3V8.27273C12.9092 8.82501 13.3569 9.27273 13.9092 9.27273H21.0001C21.5524 9.27273 22.0001 8.82501 22.0001 8.27273V3C22.0001 2.44772 21.5524 2 21.0001 2H13.9092ZM20.1819 3.81818H14.7274V7.45455H20.1819V3.81818Z" fill="#545454"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.7273C2.44772 14.7273 2 15.175 2 15.7273V21C2 21.5523 2.44771 22 3 22H10.0909C10.6432 22 11.0909 21.5523 11.0909 21V15.7273C11.0909 15.175 10.6432 14.7273 10.0909 14.7273H3ZM9.27273 16.5455H3.81818V20.1818H9.27273V16.5455Z" fill="#545454"/>
</svg>
<p className=' text-blue-600'>Songs</p>
        </div>
        </div>
        <div className=' logout-btn h-fit bottom-0'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C9.10678 22 7.38518 21.4119 5.63546 19.6636C5.24478 19.2732 5.24453 18.6401 5.6349 18.2494C6.02527 17.8587 6.65843 17.8585 7.04911 18.2488C8.38722 19.5859 9.5996 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C10.1425 4 8.38484 4.63374 6.97137 5.77764C6.54206 6.12508 5.91239 6.05871 5.56495 5.6294C5.21752 5.20009 5.28389 4.57041 5.7132 4.22297C7.47953 2.7935 9.68033 2 12 2ZM12.6129 7.2097L12.7071 7.29289L16.7071 11.2929C16.7356 11.3214 16.7623 11.3515 16.7872 11.3833L16.7071 11.2929C16.7425 11.3283 16.7747 11.3657 16.8037 11.4047C16.8215 11.4289 16.8383 11.4537 16.8539 11.4793C16.8614 11.4914 16.8685 11.5036 16.8753 11.5159C16.8862 11.5357 16.8966 11.5561 16.9063 11.5769C16.9143 11.5939 16.9218 11.6112 16.9288 11.6287C16.9367 11.6484 16.9439 11.6682 16.9505 11.6883C16.9553 11.7031 16.9599 11.7185 16.9642 11.734C16.9702 11.7556 16.9754 11.7773 16.9798 11.7992C16.9833 11.8166 16.9864 11.8341 16.989 11.8515C16.992 11.8715 16.9945 11.8921 16.9963 11.9129C16.9978 11.9317 16.9989 11.9497 16.9995 11.9677C16.9998 11.9778 17 11.9889 17 12L16.9995 12.0332C16.9989 12.0506 16.9979 12.0679 16.9964 12.0852L17 12C17 12.0506 16.9962 12.1004 16.989 12.149C16.9864 12.1659 16.9833 12.1834 16.9798 12.2007C16.9754 12.2227 16.9702 12.2444 16.9643 12.2658C16.9599 12.2815 16.9553 12.2969 16.9503 12.3121C16.9439 12.3318 16.9367 12.3516 16.9289 12.3711C16.9218 12.3888 16.9143 12.4061 16.9063 12.4232C16.8966 12.4439 16.8862 12.4643 16.8751 12.4843C16.8685 12.4964 16.8614 12.5086 16.854 12.5207C16.8383 12.5463 16.8215 12.5711 16.8037 12.5952C16.7993 12.6012 16.7948 12.6071 16.7903 12.6129C16.7849 12.6197 16.7826 12.6226 16.7803 12.6254L16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071C10.9324 16.3466 10.9047 15.7794 11.2097 15.3871L11.2929 15.2929L13.585 13H3C2.44772 13 2 12.5523 2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H13.585L11.2929 8.70711C10.9324 8.34662 10.9047 7.77939 11.2097 7.3871L11.2929 7.29289C11.6534 6.93241 12.2206 6.90468 12.6129 7.2097Z" fill="#545454"/>
</svg>

        </div>
    </div>
  )
}

export default Sidebar