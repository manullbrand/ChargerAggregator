import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import mapImage2 from "../assets/images/map2.png";

export default function RideScreen() {
  return (
    <>
      <style type="text/css">{`
    #container {
       background-color: #E9FDF7;
       box-sizing: border-box;       
    }
    
   #btn-customized {
      background-color:  #00513A;
      border: none;
     
      &:hover {
        background-color: #01a375;
      }
    }

    .check-customized {
      border: 1px solid #00513A;
      font-size: 30px;
      margin-top: 0;
      
    }

    .form-check-input:checked {
      background-color:  #01a375 !important;
      border: 1px solid #00513A;
    }

    .map-customized {
      height: 60%;
    }

    .text-customized {
      color: #00513A;
      font-weight: 500;
      line-height: 50px;

    }

 


    `}</style>

      <div id="container" className="vh-100">
        <Image
          className="map-customized vw-100"
          src={mapImage2}
          alt="Map image"
          fluid
        />

        <section>
          <div className="my-5 ms-5 ps-4">
            <div className="align-items-center d-flex gap-3 form-check">
              <input
                className="form-check-input check-customized"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-5 text-customized"
                for="flexCheckDefault"
              >
                Free now
              </label>
            </div>
            <div className="align-items-center d-flex gap-3 form-check">
              <input
                className="form-check-input check-customized"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                className="form-check-label fs-5 text-customized"
                for="flexCheckChecked"
              >
                Available soon (XX:XX hours)
              </label>
            </div>
            <div className="align-items-center d-flex gap-3 form-check">
              <input
                className="form-check-input check-customized"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-5 text-customized"
                for="flexCheckDefault"
              >
                Book a spot
              </label>
            </div>
            <div className="align-items-center d-flex gap-3 form-check">
              <input
                className="form-check-input check-customized"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                className="form-check-label fs-5 text-customized"
                for="flexCheckChecked"
              >
                Booked
              </label>
            </div>
          </div>

          <div className="d-grid gap-2 fixed-bottom mx-4">
            <Button
              className="fs-5 p-2 mb-5 rounded-3 text-white"
              id="btn-customized"
            >
              Show route
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
