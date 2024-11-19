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
import { AuthContext } from "../../context/AuthContext";
const sUrl = import.meta.env.VITE_APP_MORGS_SERVER;
import { FileUploader } from "react-drag-drop-files";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface OrderFormModalProps {
  open: boolean;
  handleClose: (open: boolean) => void;
}

const OrderFormModal: React.FC<OrderFormModalProps> = ({
  open,
  handleClose,
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
    p: 2,
  };
  const {
    orderFormInfo,
    setOrderFormInfo,
    sendClientsWeddingData,
    file,
    setFile,
  } = React.useContext(AuthContext);
  const [testFile, setTestFile] = React.useState<any>("");

  const imageFileTypes = ["JPG", "PNG", "JPEG", "jpeg", "png", "jpg"];

  function handlePurchase() {
    if (
      Object.entries(orderFormInfo).every(
        ([key, value]) => key === "image" || value !== ""
      ) &&
      testFile !== ""
    ) {
      localStorage.setItem(
        "wedding-portrait-order-form",
        JSON.stringify(orderFormInfo)
      );
      localStorage.setItem(
        "wedding-portrait-order-form-image",
        JSON.stringify(testFile)
      );

      // sendClientsWeddingData({ ...orderFormInfo, testFile });

      fetch(sUrl + "api/paintings/wedding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(orderFormInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          // redirecting the page using url from the backend
          window.location.href = data.url;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("missing fields");
    }
  }

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setOrderFormInfo((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleChange = (file: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setTestFile(base64Image);
      setFile(base64Image);
    };
    reader.readAsDataURL(file);
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
            className="order-form-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Wedding Portrait
          </Typography>
          <Typography
            className="order-form-subtitle"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Order Sheet
          </Typography>
          <div className="order-inputs-container">
            {file && (
              <div className="delete-btn-container">
                <img style={{ width: "100px" }} src={testFile} alt="test" />
                <IconButton onClick={() => setFile(null)} aria-label="delete">
                  <DeleteIcon style={{ color: "red", fontSize: "50px" }} />
                </IconButton>
              </div>
            )}
            {!file && (
              <div className="file-uploader">
                <FileUploader
                  handleChange={handleChange}
                  name="image"
                  types={imageFileTypes}
                  onTypeError={(error: any) => console.log(error)}
                  label={"Upload Photo"}
                  required
                />
              </div>
            )}
            <div className="order-form-flex">
              <TextField
                className="order-inputs"
                label="First Name"
                variant="outlined"
                name="firstName"
                onChange={handleInputChange}
              />
              <TextField
                className="order-inputs"
                label="Last Name"
                variant="outlined"
                name="lastName"
                onChange={handleInputChange}
              />
            </div>
            <div className="order-form-flex">
              <TextField
                className="order-inputs"
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleInputChange}
              />
              <TextField
                className="order-inputs"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </div>
            <TextField
              className="order-inputs"
              label="Recipient Street Address"
              variant="outlined"
              name="address"
              onChange={handleInputChange}
            />
            <div className="order-form-flex">
              <TextField
                className="order-inputs"
                label="City/Town"
                variant="outlined"
                name="city"
                onChange={handleInputChange}
              />
              <TextField
                className="order-inputs"
                label="State"
                variant="outlined"
                name="state"
                onChange={handleInputChange}
              />
              <TextField
                className="order-inputs"
                label="ZipCode"
                variant="outlined"
                name="zipCode"
                onChange={handleInputChange}
              />
            </div>
            <TextField
              className="order-inputs"
              label="Occasion for Your Order"
              variant="outlined"
              multiline
              rows={3}
              name="occasion"
              onChange={handleInputChange}
            />
          </div>
          <Stack justifyContent={"center"} direction="row" spacing={4}>
            <Button onClick={handlePurchase} variant="contained">
              Checkout
            </Button>
            <Button
              onClick={() => {
                handleClose(false);
                setOrderFormInfo({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phoneNumber: "",
                  address: "",
                  city: "",
                  state: "",
                  zipCode: "",
                  occasion: "",
                  price: "",
                });
              }}
              variant="contained"
              color="warning"
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderFormModal;
