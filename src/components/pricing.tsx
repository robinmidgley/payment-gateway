import { CheckIcon } from "@heroicons/react/16/solid";

interface PricingPlanProps {
  title: string;
  description: string;
  items: string[];
  price: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  description,
  items,
  price,
}) => (
  <div className="border p-8 rounded-lg">
    <div className="font-semibold text-4xl">{title}</div>
    <div className="border-b py-4 text-black/60">{description}</div>
    <div className="flex flex-col mt-4 gap-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-x-2">
          <CheckIcon className="w-5 h-5 text-blue-500" />
          <div>{item}</div>
        </div>
      ))}
    </div>
    <div className="flex my-8 gap-x-1 items-center">
      <div className="text-2xl">{price}</div>
      <div className="text-sm">/mo</div>
    </div>
    <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 ease-in-out duration-200 text-lg font-medium">
      Get it now
    </button>
  </div>
);

export default function Pricing() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col text-center gap-y-6 mt-24">
        <span className="text-5xl font-semibold">Pricing</span>
        <div className="text-black/60">
          A package fit for everyone, from individuals to large companies.
        </div>
      </div>
      <div className="grid gap-y-4 grid-cols-1 md:grid-cols-3 gap-x-12 mt-8">
        <PricingPlan
          title="Starter"
          description="Great for individuals with small scale projects"
          items={[
            "Custom payment links",
            "Currency conversion",
            "API access",
            "24/7 email support",
          ]}
          price="£24.99"
        />
        <PricingPlan
          title="Business"
          description="Ideal for small to medium-sized businesses"
          items={[
            "Everything in Starter",
            "Automatic risk analysis",
            "Automatic dispute management",
            "Currency conversion",
          ]}
          price="£49.99"
        />
        <PricingPlan
          title="Enterprise"
          description="A scalable and custom solution for larger businesses"
          items={[
            "Everything in Business",
            "Priority support",
            "Setup multiple accounts",
            "Dedicated account manager",
          ]}
          price="£99.99+"
        />
      </div>
    </div>
  );
}
