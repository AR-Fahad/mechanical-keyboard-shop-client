import { loadStripe } from "@stripe/stripe-js";
import MainLayout from "./components/layout/MainLayout";
import { Elements } from "@stripe/react-stripe-js";
import { config } from "./config";

const stripePromise = loadStripe(config.stripeGatewayKey);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MainLayout />
    </Elements>
  );
};

export default App;
