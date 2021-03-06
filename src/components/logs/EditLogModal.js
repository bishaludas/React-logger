import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logAction";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onsubmit = e => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updateVal = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };
      updateLog(updateVal);
      M.toast({ html: `Log updated by ${tech}` });
    }
    // clear fields
    setMessage("");
    setTech("");
    setAttention(false);
  };
  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Edit log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

            {/* <label htmlFor="message" className="active">
              Log Message
            </label> */}
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="1">John</option>
              <option value="2">Brad</option>
              <option value="3">Sugat</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />

                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onsubmit}
            className="modal-close waves-effect waves-green btn"
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

EditLogModal.prototype = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
