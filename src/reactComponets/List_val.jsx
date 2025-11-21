
import { create } from "zustand";
import { nanoid } from 'nanoid'

const getStoredListed=()=>{
  const stored = localStorage.getItem("listed");
  return stored ? JSON.parse(stored) : [];
};


export const listed_val = create((set) => ({
  listed: getStoredListed(), 

  add_Item: (Title, value) => {
    set(state => {
      const newListed = [
        ...state.listed,
        {
          title: Title,
          val: value,
          time: [[new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()].join('.'),
            [String(new Date().getHours()).padStart(2, '0'), String(new Date().getMinutes()).padStart(2, '0'), String(new Date().getSeconds()).padStart(2, '0')].join(':')
          ].join(' '),isHighlight: false,id:nanoid()}];

      localStorage.setItem("listed", JSON.stringify(newListed)); // save to localStorage
      return { listed: newListed }})},

  remove_item: (id) => {
    set(state => {
      const newListed = state.listed.filter(val => val.id !== id);
      localStorage.setItem("listed", JSON.stringify(newListed));
      return { listed: newListed };
    });
  },

  Highlight_item: (id) => {
    set(state => {
      const newListed = state.listed.map(item =>
        item.id === id ? { ...item, isHighlight: !item.isHighlight } : item);

      localStorage.setItem("listed", JSON.stringify(newListed));
      return { listed: newListed }})},

  Apply_item: (id, Title, value) => {
    set(state => {
      const newListed = state.listed.map(item =>item.id === id ? { ...item, title: Title, val: value } : item)

      localStorage.setItem("listed", JSON.stringify(newListed));
      return { listed: newListed }})}

}));

