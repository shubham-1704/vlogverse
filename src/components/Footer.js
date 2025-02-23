import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className='bg-mine2 mt-4 px-1 py-1 text-center w-full'>
            <div className='w-1/4  mx-auto'>
                <div className="my-2 pb-2 border-b text-xl text-center font-semibold  tracking-wider ">Made by <span className='text-white '>Shubham</span></div>
                <div className='flex my-2 pt-2 justify-center' >
                    {/* <a href="https://www.instagram.com/" target="_blank" className="px-4" rel="noreferrer" title="Instagram">
                        <div ><i className="fa-brands fa-instagram fa-2xl"></i></div>
                    </a> */}
                    <a href="https://github.com/https://github.com/shubham-1704" target="_blank" className="px-4" rel="noreferrer" title="Github">
                        <i class="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shubham-singh-13b955249/" target="_blank" className="px-4" rel="noreferrer" title="LinkedIn">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                    <a href=" https://shubhamsingh17099@gmail.com" target="_blank" className="px-4" rel="noreferrer" title="Email">
                        <i class="fa-regular fa-envelope fa-2xl"></i>
                    </a>

                </div>


            </div>




        </div>
    )
}

export default Footer
