import Header from "../src/components/header/Header"
import Banner from "../src/components/banner/Banner"
import SectionOne from "../src/components/sectionOne/sectionOne"
import SectionTwo from "../src/components/sectionTwo/sectionTwo"
import SectionThree from "../src/components/sectionThree/sectionThree"
import SectionFour from "../src/components/sectionFour/sectionFour"
import Footer from "../src/components/footer/Footer"

export default function App() {
  return (
    <div className="font-sans">
			<Header />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <section
        className="h-52 bg-cover bg-center lg:h-150"
        style={{ backgroundImage: "url(/assets/bg4.jpg)" }}
      />

      <Footer />
    </div>
  )
}