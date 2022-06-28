import React, { useContext } from "react";
import { UserContext } from "../firebaseComponents/UserProviders";
import lottie from "lottie-web/build/player/lottie_light";
import ModalBack from "../static/to-do-tasks.json";
import './modaldialog.css';
import $ from 'jquery';

const ModalDialog = ({modalUser,modalAnimationID,modalAnimation,modalBody,modalTitle,modalFooter,modalFCheckTitle,modalClickText}) => {
   
  
  React.useEffect(() => {
      lottie.loadAnimation({
        container: document.querySelector("#ModalBack"),
        animationData: ModalBack,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }, []);

    $(document).ready(function () {
    
        $(".modal").css({ display: "block" });
        $(".modal").addClass("show");
        $("body").addClass("modal-open");
        $(".modal-footer button").on("click", function () {
          $(".modal").css({ display: "none" });
          $("body").removeClass("modal-open");
          $(".modal-backdrop").remove();
        });
      });
    
    return (
      <div id="ModalComponent">
        <div className="fade modal-backdrop show"></div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{modalTitle}</h4>
              </div>
             
              <div className="modal-body">
             {modalAnimation === true && <div id={modalAnimationID}></div>}
             {modalBody  && <div><p><b>{modalUser}</b></p> <p> {modalBody}</p></div>}
              </div>


              <div className="modal-footer">
              { modalFooter &&  <p>{modalFooter}  <em>button</em> <b>{modalFCheckTitle}</b></p>}
             <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal" 
                >
                    {modalClickText}
                </button>

              </div>


            </div>
          </div>
        </div>
      </div>
    );
  };

  export { ModalDialog };