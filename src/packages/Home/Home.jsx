import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.scss'
import { useEffect, useState } from 'react';



function Home() {
  useEffect(() => {
    const LogoDivParents = document.querySelectorAll(".LogoDivParent");
    const aboutText = document.querySelectorAll(".about-text")
    for (let i = 0; i < 6; i++) {
      const element = LogoDivParents[i];
      element.style.opacity = "0";
      element.style.marginLeft = "3rem"

      setTimeout(() => {
        element.style.marginLeft = ""
        element.style.opacity = "1";
      }, 200 * (i + 1));

    }
    for (let i = 0; i < 3; i++) {
      const element = aboutText[i];
      element.style.opacity = "0";
      element.style.marginLeft = "4rem"

      setTimeout(() => {
        element.style.marginLeft = ""
        element.style.opacity = "1";
      }, 300 * (i + 1));
    }

    LogoDivParents.forEach(element => {
      element.addEventListener('click', () => {
        for (let i = 0; i < 6; i++) {
          const element = LogoDivParents[i];
          element.style.opacity = "0";
          element.style.marginLeft = "3rem"

          setTimeout(() => {
            element.style.marginLeft = ""
            element.style.opacity = "1";
          }, 200 * (i + 1));
        }

      })
    });
  }, []);


  return (
    <div className='HomeParent mt-5'>
      <Container fluid="md">
        <Row className='d-flex align-items-end'>
          <Col md={6} className='content-left-col'>
            <div className="Content-left d-flex align-items-center flex-column justify-content-end">
              <div className="MyImage">
                <img src="https://avatars.githubusercontent.com/u/153429647?v=4" alt="" />
              </div>
              <h1 className='mt-5 about-text'>Ömer Yüksekbağ</h1>
              <p><span className='text-center about-text'>Hello World!</span></p>
              <p className='text-center about-text'>I'm a passionate Front-End developer from Turkey. I am someone who is open to
                innovations and values creative, aesthetic design. As a developer who loves learning new
                things every day, I aim to contribute to projects by prioritizing user experience.
                I am open to collaboration
                and value team spirit. I look forward to working with you and making your web projects more impressive.</p>
            </div>
          </Col>
          <Col md={6} className='content-right-col'>
            <div className="LogoDivParent">
              <div className="myImageLogo">
                <img src="https://camo.githubusercontent.com/3d0ddeed2c709ed1cbce62a9c624d0f719d5ed695567a2eef03d61a70c7ff336/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d706c61696e2e737667" alt="" />
              </div>
              <h4 id='text-1' className='logo-texts'>JavaScript</h4>
            </div>
            <div className="LogoDivParent">
              <div className="myImageLogo">
                <img src="https://camo.githubusercontent.com/df3d141f148b528232101bccd5197b384b7e5c4e8baf43a243065cbe5a8a8195/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
              </div>
              <h4 id='text-2' className='logo-texts'>React.js</h4>
            </div>
            <div className="LogoDivParent">
              <div className="myImageLogo">
                <img src="https://camo.githubusercontent.com/0da944f181647261c840e34b20ed7e3ca44ddc150869c6ea550cf98d06c81a37/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667" alt="" />
              </div>
              <h4 id='text-3' className='logo-texts'>CSS3</h4>
            </div>
            <div className="LogoDivParent">
              <div className="myImageLogo">
                <img src="https://camo.githubusercontent.com/e54bbf567f42ce9666034c8ee586ab0a43857d2a6fd6c37fa4e7e4a164069ed2/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f626f6f7473747261702f626f6f7473747261702d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
              </div>
              <h4 id='text-4' className='logo-texts'>Bootstrap</h4>
            </div>
            <div className="LogoDivParent">
              <div className="myImageLogo">
                <img src="https://camo.githubusercontent.com/575b33e86739b657387aaf2598c4f9d6677a60a33718d65e11e0d81cbb7cc09c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f736173732f736173732d6f726967696e616c2e737667" alt="" />
              </div>
              <h4 id='text-5' className='logo-texts'>Sass</h4>
            </div>
            <div className="LogoDivParent">
              <div className="myImageLogo">
                <img src="https://camo.githubusercontent.com/f2ce4039c99cf35adde738583ab0fbcd60eaafccf1e949884bda91d0b5c819ce/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="" />
              </div>
              <h4 id='text-6' className='logo-texts'>HTML5</h4>
            </div>
          </Col>
        </Row>
      </Container>


    </div>

  )
}

export default Home