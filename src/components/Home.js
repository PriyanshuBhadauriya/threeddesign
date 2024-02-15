import React,{useState,useEffect,useRef} from 'react'
import './home.css';
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";


function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  birdSize: 2.70
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
 <div className='box' ref={vantaRef}>
<div className='navbar'>
    <li><a href='home.js'>Home</a></li>
    <li><a href='contact.js'>Contact</a></li>
    <li><a href='project.js'>Project</a></li>
</div>
<div className='Text'><span className='D3'>3D</span>
<div className='web'>WEBSITE</div>



</div>
<div className='images'>
    <img className='photo1' src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600' alt='photo1'></img>
    <img className='photo2' src='https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600' alt='photo2'></img>
    <img className='photo3' src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600' alt='photo3'></img>
    <img className='photo4' src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600' alt='photo4'></img>
</div>

 </div>
  )
}

export default Home