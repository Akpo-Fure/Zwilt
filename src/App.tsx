import HeroComponent from "./components/heroSection/HeroComponent";
import FooterComponent from "./components/footer/FooterComponent";
import HowWeEnsureComponent from "./components/howWeEnsure/HowWeEnsureComponnet";
import HowItStartedComponent from "./components/howitStarted/HowItStartedComponent";
function App() {
  return (
    <div>
      <HeroComponent />
      <HowItStartedComponent />
      <HowWeEnsureComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
