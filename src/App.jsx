import React from 'react'
import { Header, Hero, PageSection, PageContent, Testimonial, CompanyLogo, SignatureCard, Footer } from './Components/index'
import { Img1, Img2, AppleStore, GooglePlay } from './assets/index'

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
