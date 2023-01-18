import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="container my-3">
          <div className="row d-flex justify-content-between">
            <p className="col-md-6 col-12">
              Copyright &copy; {year} TechNITi, NIT Jalandhar
            </p>
            <p className="col-md-6 col-12 text-end">
              Developed with ❣️ By{" "}
              <a
                href="https://github.com/ssahibsingh"
                target="_blank"
                rel="noreferer"
                className="text-green"
              >
                Sahib Singh
              </a>{" "}
              &{" "}
              <a
                href="https://github.com/Nitesh2905"
                target="_blank"
                rel="noreferer"
                className="text-green"
              >
                Nitesh Yadav
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
