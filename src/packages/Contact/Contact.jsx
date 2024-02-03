import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Contact.scss'
import Table from 'react-bootstrap/Table';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { useEffect, useState } from 'react';


function Contact() {


  const [parentDivs, setParentDivs] = useState([]);

  useEffect(() => {
    const newParentDivs = document.querySelectorAll(".parent-divs");
    setParentDivs(newParentDivs);
  }, []);

  useEffect(() => {
    if (parentDivs.length === 0) {
      return; // parentDivs henüz yüklenmediyse, işlemi yapma
    }

    const animateDivs = () => {
      for (let i = 0; i < 6; i++) {
        const element = parentDivs[i];
        element.style.opacity = "0";
        element.style.marginTop = "-10rem";

        setTimeout(() => {
          element.style.opacity = "1";
          element.style.marginTop = "";
        }, 200 * (i + 1));
      }
    };

    // İlk animasyonu başlat
    animateDivs();

    // Her 20 saniyede bir animasyonu tekrar başlat
    const intervalId = setInterval(() => {
      animateDivs();
    }, 20000);

    // Component unmount olduğunda interval'i temizle
    return () => clearInterval(intervalId);

  }, [parentDivs]);





  return (
    <div className='ContactParent mt-5'>
      <Container fluid="md">
        <Row>
          <Col>
            <a className='text-decoration-none text-reset' href="https://github.com/omerrykb" target='_blank'>
              <div className="parent-divs">
                <div className="social-media-logo">
                  <FaGithub style={{ color: "#e6edf3" }} />
                </div>
                <h2 style={{ color: "#e6edf3" }}>GitHub</h2>
              </div>



            </a>
          </Col>
          <Col>
            <a className='text-decoration-none text-reset' href="mailto:omerryuksekbag@gmail.com" target='_blank'>
              <div className="parent-divs">
                <div className="social-media-logo">
                  <MdEmail style={{ color: "#dc3545" }} />
                </div>
                <h2 style={{ color: "#dc3545" }}>E-Mail</h2>
              </div>



            </a>
          </Col>
          <Col>
            <a className='text-decoration-none text-reset' href="https://tr.linkedin.com/in/%C3%B6mer-y%C3%BCksekba%C4%9F-8841572a9" target='_blank'>
              <div className="parent-divs">
                <div className="social-media-logo">
                  <FaLinkedin style={{ color: "#0967c1" }} />
                </div>
                <h2 style={{ color: "#0967c1" }}>LinkedIn</h2>
              </div>



            </a>
          </Col>
          <Col>
            <a className='text-decoration-none text-reset' href="https://www.instagram.com/omerrykb/" target='_blank'>
              <div className="parent-divs">
                <div className="social-media-logo">
                  <BsInstagram style={{ color: "#ae1eb0" }} />
                </div>
                <h2 style={{ color: "#ae1eb0" }}>Instagram</h2>
              </div>



            </a>
          </Col>
          <Col>
            <a className='text-decoration-none text-reset' href="https://wa.me/+905459754335" target='_blank'>
              <div className="parent-divs">
                <div className="social-media-logo">
                  <SiWhatsapp style={{ color: "#1ca011" }} />
                </div>
                <h2 style={{ color: "#1ca011" }}>WhatsApp</h2>
              </div>



            </a>
          </Col>
          <Col>

            <div className="parent-divs DiscordUserNameParent mb-4">
              <div className="DiscordUserName mb-1">rath2874</div>
              <div className="social-media-logo">
                <BsDiscord style={{ color: "#5865f2" }} />
              </div>
              <h2 style={{ color: "#5865f2" }}>Discord</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact