import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Map from "../components/Map.jsx";

export default function BookingScreenAlt() {
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

    #btn-customized {
      background-color:  #00513A;
      border: none;
     
      &:hover {
        background-color: #01a375;
      }
    }

    .font-customized {
      font-size: 36px;
      font-weight: 600;
      line-height: 50px;
        
    }

    .text-color {
      color: #00513A;
    }

    `}</style>

      <div id="container" className="vh-100">
        <Map currentPage="booking" />

        <section className="mt-4 mx-4">
          <h2 className="font-customized mb-4 me-5 text-color">
            When do you want to use the selected charging station?
          </h2>

          <DropdownButton
            className="mb-6 rounded-3"
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
