import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import mapImage from "../assets/images/map.png";

export default function BookingScreen() {
  return (
    <>
      <style type="text/css">{`
    #container {
       background-color: #E9FDF7;
       box-sizing: border-box;       
    }
    
    #dropdown-basic-button {
      background-color: #ffffff;
      border: 1px solid #00513A;
      color: #00513A;
      text-align: start;
      width: 200px;

      &:after {
       font-size: larger;
        margin-left: 0.75rem;
      } 
          
    }

    #form-input {
      background-color: #ffffff;
      border: 1px solid #00513A;
    }

    #btn-customized {
      background-color:  #00513A;
      border: none;
     
      &:hover {
        background-color: #01a375;
      }
    }

    .text-color {
      color: #00513A;
    }

    `}</style>

      <div id="container" className="vh-100">
        <Image className="mb-4 vw-100" src={mapImage} alt="Map image" fluid />

        <section className="mx-4">
          <Form.Control
            id="form-input"
            className="mb-5 p-2 rounded-3"
            type="text"
            placeholder="Charging station adress"
          />
          <h2 className="fs-5 fw-bold mb-3 text-color">
            When do you want to use the selected charging station?
          </h2>

          <DropdownButton
            id="dropdown-basic-button"
            title="Date and time picker"
          >
            <Dropdown.Item href="#/action-1">
              A library with calendar and time
            </Dropdown.Item>
          </DropdownButton>

          <div className="mt-4">
            <h3 className="fw-bold h3 text-color">
              60 minute free cancellation
            </h3>
          </div>

          <div className="d-grid gap-2 fixed-bottom mx-4">
            <Breadcrumb>
              <Breadcrumb.Item className="text-white" href="#">
                <a className="link-success" href="#">
                  Terms and Conditions of use
                </a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Button
              className="fs-5 p-2 mb-5 rounded-3 text-white"
              id="btn-customized"
            >
              Confirm
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
