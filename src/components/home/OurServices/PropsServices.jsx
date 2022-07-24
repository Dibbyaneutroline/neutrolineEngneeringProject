import React from 'react'

function PropsServices() {
  return (
    <>
      <div >
                <div
                  className="card p-2 ourService_card"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="image/service1.jpg"
                    alt="carousel of nice place"
                  />
                  <div className="card-body">
                    <h5 style={{ textAlign: "center" }}>Service 1</h5>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        padding: "10px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default PropsServices