import PricingPage from "../components/PricingComponent/PricingPage";
import ChargesExplained from "../components/PricingComponent/ChargesExplained";
import ChargesTables from "../components/PricingComponent/ChargesTables";
import BrokerageTable from "../components/PricingComponent/BrokerageComponent/BrokerageSection";
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
