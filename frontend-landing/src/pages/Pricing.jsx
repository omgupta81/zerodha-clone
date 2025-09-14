import PricingPage from "../components/PricingPage";
import ChargesExplained from "../components/ChargesExplained";
import ChargesTables from "../components/ChargesTables";
import BrokerageTable from "../components/BrokerageSection";
const Pricing = () => {
  return (
    <>
      <PricingPage />
      <BrokerageTable />
      <ChargesTables />
      <ChargesExplained />
    </>
  );
};
export default Pricing;
