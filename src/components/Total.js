import React from 'react';
import '../css/Total.scss';

const Total = () => (
  <ul>
    <li>通常回転: {localStorage.getItem('tujyo_total')}</li>
    <li>総出玉: {localStorage.getItem('dedama_total')}</li>
    <li>時短回数: {localStorage.getItem('jitan_total')}</li>
  </ul>
)
export default Total;