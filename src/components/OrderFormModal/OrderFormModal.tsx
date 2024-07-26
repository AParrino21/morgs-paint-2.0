import React from "react";
import "./OrderFormModal.css";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface OrderFormModalProps {
  open: boolean;
  handleClose: (open: boolean) => void;
  price: number | undefined;
}

const OrderFormModal: React.FC<OrderFormModalProps> = ({
  open,
  handleClose,
  price,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "500px",
    textAlign: "center",
    border: "1px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="order-form-modal" sx={style}>
          <Typography
            style={{
              fontFamily: "Bad Script, arial",
              fontSize: "60px",
              textShadow: "0px 0px 8px black",
              color: "white",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Wedding Portrait
          </Typography>
          <Typography
            style={{
              fontFamily: "Bad Script, arial",
              fontSize: "40px",
              textShadow: "0px 0px 8px black",
              color: "white",
            }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Order Sheet
          </Typography>
          <div className="order-inputs-container">
            <TextField
              className="order-inputs"
              label="First Name"
              variant="outlined"
            />
            <TextField
              className="order-inputs"
              label="Last Name"
              variant="outlined"
            />
            <div className="order-form-flex">
              <TextField
                className="order-inputs"
                label="Email"
                variant="outlined"
              />
              <TextField
                className="order-inputs"
                label="Phone Number"
                variant="outlined"
              />
            </div>
            <TextField
              className="order-inputs"
              label="Recipient Street Address"
              variant="outlined"
            />
            <div className="order-form-flex">
              <TextField
                className="order-inputs"
                label="City/Town"
                variant="outlined"
              />
              <TextField
                className="order-inputs"
                label="State"
                variant="outlined"
              />
              <TextField
                className="order-inputs"
                label="ZipCode"
                variant="outlined"
              />
            </div>
            <TextField
              className="order-inputs"
              label="Occasion for Your Order"
              variant="outlined"
              multiline
              rows={3}
            />
          </div>
          <Stack justifyContent={"center"} direction="row" spacing={4}>
            <Button variant="contained">Add To Cart</Button>
            <Button variant="contained" color="warning">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderFormModal;
