import React from 'react'

import Navigation from './navigation/Navigation'
import Bai1 from './baitap/Bai1'
import Bai2 from './baitap/Bai2'
import Bai6 from './baitap/Bai6'
import Bai5 from './baitap/Bai5'
import Bai3 from './baitap/Bai3'
import Bai4 from './baitap/Bai4'


export default function page() {
  return (
    <div>hello  
      <Navigation></Navigation>
      
      <Bai1></Bai1>
      <br />
      <hr />
      <Bai2></Bai2>
      <br />
      <hr />
      <Bai3></Bai3>
      <br />
      <hr />
      <Bai4></Bai4>
      <br />
      <hr />
      <Bai5></Bai5>
      <br />
      <hr />
      <Bai6></Bai6>

    </div>
  )
}
