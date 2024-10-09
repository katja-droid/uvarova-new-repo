import React from 'react'
import BeforeAfterLayout from "./BeforeAfterLayout";
import before1 from '../assets/before1.png'; 
import after1 from '../assets/after1.png'; 
import before2 from '../assets/before2.png'; 
import after2 from '../assets/after2.png'; 
import before3 from '../assets/before3.png'; 
import after3 from '../assets/after3.png'; 
const BeforeAfterSmaller = () => {
  return (
    <div>    <BeforeAfterLayout beforeImage={before1} afterImage={after1} />
    <BeforeAfterLayout beforeImage={before2} afterImage={after2}  />
    <BeforeAfterLayout beforeImage={before3} afterImage={after3} /></div>
  )
}

export default BeforeAfterSmaller