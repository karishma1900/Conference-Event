import { createSlice } from "@reduxjs/toolkit";
import projector from './assets/projector.jpg'
import signage from './assets/signage.jpg'
import speaker from './assets/speakers.jpg'
import whiteboard from './assets/whiteboar.webp'
import microphone from './assets/microphones.jpg'

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: projector,
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: speaker,
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: microphone,
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: whiteboard,
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: signage,
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
