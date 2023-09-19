import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          {idName === "about" && (
            <div className="copyright">
              <p className="p-text">
                <a
                  style={{ textDecoration: "none", color: "#000" }}
                  href="https://www.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_11667605.htm#&position=0&from_view=collections"
                >
                  Image by vectorjuice
                </a>
              </p>
              <p className="p-text">on Freepik</p>
            </div>
          )}
          <div className="copyright">
            <p className="p-text">@2023 TaeIn</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
