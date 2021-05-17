import React, { Suspense } from "react";
import "./InfoCard.scss";
// import { useImage } from "react-image";
import Photo from "./image-header-desktop.jpg";

// const MyImageComponent = () => {
//   const { src } = useImage({
//     srcList: "image-header-desktop.jpg",
//   });

//   return <img src={src} />;
// };

const InfoCard = () => {
  const violetWord = (props) => (
    <p style={{ fontWeight: "bold", fontColor: "$soft-violet" }}>
      {props.children}
    </p>
  );

  return (
    <div className="bcg">
      <div className="container">
        <div className="txtFields">
          <div className="hugeTxtField">
            <p>
              Get <violetWord>insights</violetWord> that help <br /> your
              business grow.{" "}
            </p>
          </div>

          <div className="smallTxtField">
            {" "}
            Discover the benefits of data analytics and make <br /> better
            decisions regarding revenue, customer <br /> experience, and overall
            efficiency.{" "}
          </div>
          <div className="numbers">
            10k+ companies 314 templates 12m+ queries
          </div>
        </div>
        <div className="violetImg">
          <img className='photo' src={Photo} alt="Logo" />
        </div>
      </div>

      {/* <Suspense fallback={<h1>image</h1>}>
      <MyImageComponent />
    </Suspense> */}
    </div>
  );
};

export default InfoCard;
