import Button from "react-bootstrap/Button";

import ChargingProgressBar from "../components/ChargingProgressBar";

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

    .card-customized {
      border: 2px solid #00513A;
      border-radius: 0;
      color: #00513A;
      font-weight: 500;
      height: 94px;
      width: 155px;
    }

    .map-customized {
      height: 60%;
    }

    .progress-wrapper {
      width: 250px;
      height: 250px;
   
    }
  
    .progress-circle {
      border-radius: 50%;
      border: 18px dashed #00513A;
    
   }

    .progress-text {
      font-size: 80px;
      font-weight: 600;
      color: #00513A;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }

    .text-customized {
      color: #00513A;
      font-weight: 500;
    }

    .table-customized {
      border-color: transparent;
      --bs-table-bg: transparent;
      --bs-table-color: #00513A;
    }



    
   `}</style>

      <div id="container" className="vh-100">
        <section className="d-flex justify-content-center ">
          <ChargingProgressBar />
        </section>

        <section>
          <div className="mx-0 mt-5 row row-cols gap-4 justify-content-center">
            <div className="card card-customized me-3 p-0">
              <div className="d-flex align-items-center card-body px-3">
                <p className="m-0 p-0">
                  Time left
                  <br />5 minutes
                </p>
              </div>
            </div>

            <div className="card card-customized p-0">
              <div className="d-flex align-items-center card-body px-3">
                <p className="m-0 p-0">
                  Range <br />
                  350 km
                </p>
              </div>
            </div>
            <div className="card card-customized me-3 p-0">
              <div className="d-flex align-items-center card-body px-3">
                <p className="m-0 p-0">
                  Energy delivery
                  <br />
                  20.3 KWH
                </p>
              </div>
            </div>
            <div className="card card-customized p-0">
              <div className="d-flex align-items-center card-body px-3">
                <p className="m-0 p-0">
                  Charging ID
                  <br />
                  251254
                </p>
              </div>
            </div>
          </div>

          <div className="m-5">
            <table className="m-0 table table-customized">
              <tbody className="fs-5 text-customized">
                <tr className="d-flex justify-content-between">
                  <td className="p-0">Charging fees</td>
                  <td className="p-0"> 15.00</td>
                </tr>
                <tr className="d-flex justify-content-between">
                  <td className="p-0">Extra fees</td>
                  <td className="p-0">5.00</td>
                </tr>
                <tr className="d-flex justify-content-between ">
                  <td className="mt-3 p-0">Total</td>
                  <td className="mt-3 p-0">20.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-grid fixed-bottom mx-4">
            <Button
              className="fs-5 p-2 mb-4 rounded-3 text-white"
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
