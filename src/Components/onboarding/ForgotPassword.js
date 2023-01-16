import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { handleChange } from "../../store/inputs/input-slice";

const ForgotPassword = ({ show, handleClose }) => {
  const handleSubmit = () => {
    toast.success("Password reset email sent!");
    handleClose();
  };

  const dispatch = useDispatch();

  const handleChangeDispatch = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const { resetPassword } = useSelector((state) => state.input);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <small className="text-secondary">
            Enter your work email and your password reset link will be sent to
            you
          </small>

          <div className="input-wrap mt-3">
            <input
              type="email"
              name="resetPassword"
              class="form-control"
              placeholder="Email"
              onChange={(e) => handleChangeDispatch(e)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={resetPassword === "" && true}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ForgotPassword;
