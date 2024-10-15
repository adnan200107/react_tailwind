import React from 'react';
import adnanimg from "../assets/adnanimg.jpg";

export default function CustomHeader() {
  return (
    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Section de l'image */}
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
          <img className="custom-header-img img-fluid rounded-circle shadow-sm" src={adnanimg} alt="Adnan" />
          </div>
          {/* Section du texte */}
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">I'm</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>Adnan Labzioui</h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
            <div className="typed-text d-none">Web Developer, Full Stack Developer</div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href="/" className="btn btn-outline-light mr-5">Download CV</a>
              <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                <span></span>
              </button>
              <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
