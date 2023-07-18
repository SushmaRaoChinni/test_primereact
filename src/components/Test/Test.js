import React from 'react'
import './Test.css';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import {FaGraduationCap} from "react-icons/fa";

function Test() {
  return (
    <div >
      
        <h1 className='heading '><FaGraduationCap />Testimonial</h1>
        <p className='para text-center '>What Our Clients Says</p>
        <div className="card-container flex flex-row m-8  text-center">
          
        <Card className="md:w-25rem mr-5" >
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png' alt="img"/>
          <p className="m-0 ">
            Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrics ligula aliquet adio tristique euismod. Donec efficitur dolor in turips aliquet, at mollis. 
          </p>
          <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_03.png" alt="img"/>
          <h2>Roboto Eorure</h2>
          <p className='text-gray-500 '>Web Developer</p>
          </Card>

          <Card className="md:w-25rem mr-5 ">
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png' alt="img"/>
          <p className="m-0">
            Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrics ligula aliquet adio tristique euismod. Donec efficitur dolor in turips aliquet, at mollis. 
          </p>
          <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar.png" alt="img"/>
          <h2>Margie Dose</h2>
          <p className='text-gray-500'>Web Developer</p>
           </Card>

          <Card className="md:w-25rem">
          <img src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/qt-icon.png' alt="img"/>
          <p className="m-0 ">
            Curabitur ac tortor ante. Sed quis iaculis risus. Ut ultrics ligula aliquet adio tristique euismod. Donec efficitur dolor in turips aliquet, at mollis. 
          </p>
          <img src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/testi_avatar_02.png" alt="img"/>
          <h2>Rock Dloder</h2>
          <p className='text-gray-500'>Web Developer</p>
          </Card>
          
        </div> 
    </div>
  )

  
}

export default Test