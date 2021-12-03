import { useState } from 'react'
import icon from './assets/woman_icon.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="card">
    <div class={"card__header "}>
    </div>
    <div class="card-body">
      <div class="img_container">
        <picture class= "image"> 
         <img src ={icon} alt = ""></img>
        </picture>
      </div>
         <divv class="card-name">
          <div class="yariba">
          <p>Yarriba Castro</p>
          </div>

          <div class="design">
          <p>Design Track</p>
          </div>
           
           
         </divv>
         <div class="card-info">
           <p>I choose design track because I love 
             to design beautiful user-center interfaces</p>
         </div>
    </div>
    <div class="card__footer">
        <p>Yaretas24</p>
        <p>Yaretas24</p>
    </div>
</div>
  )
}

export default App
