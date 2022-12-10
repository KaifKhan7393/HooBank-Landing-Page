import React from 'react'
import Header from './Components/Header/index'
import Hero from './Components/Hero/index'
import PageSection from './Components/PageSection/index'
import PageContent from './Components/PageContent/index'
import Img1 from './assets/Img-1.png'
import Img2 from './assets/Img-2.png'
import AppleStore from './assets/Apple-store.svg'
import GooglePlay from './assets/Google-store.svg'
import CompanyLogo from './Components/CompanyLogo/index'
import SignatureCard from './Components/SignatureCard/index'
import Testimonial from './Components/Testimonial/index'
import Footer from './Components/Footer/index'

const Data = [
  {
    id: 1,
    title: "Easily control your billing & invoicing.",
    text: "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
    img: Img1,
    direction: 'row-reverse',
    appleStore: AppleStore,
    googlePlay: GooglePlay
  },
  {
    id: 2,
    title: "Find a better card deal in few easy steps.",
    text: "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
    img: Img2,
    btn: true
  }
];
function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <PageSection />
      {Data.map((data) => (
        <PageContent data={data} key={data.id} />
      ))}
      <Testimonial />
      <CompanyLogo />
      <SignatureCard />
      <Footer />
    </div>
  )
}

export default App
