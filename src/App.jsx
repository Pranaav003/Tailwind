import {Blog, Footer, Hero} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className = "relative">
      <Nav />
    <section className = "xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className = "padding">
      <Footer />
    </section>
  </main>
)
export default App;