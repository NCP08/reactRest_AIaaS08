import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button, TextField, Stack } from "@mui/material";

function AddCar(props) {
  const [open, setOpen] = useState(false); // 자동차 정보 입력 대화상자 열림 여부
  const [car, setCar] = useState({
    // 자동차 입력 정보
    brand: "",
    model: "",
    color: "",
    year: "",
    price: "",
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) =>
    setCar({ ...car, [e.target.name]: e.target.value });

  return (
    <div>
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <input
              placeholder="Brand"
              name="brand"
              value={car.brand}
              onChange={handleChange}
            />
            <br />
            <input
              placeholder="Model"
              name="model"
              value={car.model}
              onChange={handleChange}
            />
            <br />
            <input
              placeholder="Color"
              name="color"
              value={car.color}
              onChange={handleChange}
            />
            <br />
            <input
              placeholder="Year"
              name="year"
              value={car.year}
              onChange={handleChange}
            />
            <br />
            <input
              placeholder="Price"
              name="price"
              value={car.price}
              onChange={handleChange}
            />
            <br />
          </Stack>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleClose}>Save</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCar;
