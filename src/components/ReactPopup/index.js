import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'



const ReactPopUp = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="call-btn">Request call Back</button>
        } className="popup-content"
      >
        {close => (
          <div>
            <div>
              <p>We will reach out to you with in 24 hours.</p>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
   )

   export default ReactPopUp