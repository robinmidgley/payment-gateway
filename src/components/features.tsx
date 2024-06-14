import React from "react";
import {
  ShieldCheckIcon,
  BoltIcon,
  CubeTransparentIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col gap-y-2 border p-4 rounded-lg hover:translate-y-[-10px] ease-in-out duration-500 hover:bg-blue-600 hover:text-white">
    {icon}
    <span className="text-xl font-medium">{title}</span>
    <span>{description}</span>
  </div>
);

type FeatureSectionProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <div className="flex flex-col md:flex-row items-center mt-12">
    <div>
      <Image
        src={imageSrc}
        width={450}
        height={450}
        quality={100}
        alt="Connection example"
        className="border rounded-lg"
      />
    </div>
    <div className="md:ml-12 mt-4 md:mt-0 text-center md:text-left">
      <div className="text-3xl font-semibold mb-2">{title}</div>
      <div className="text-black/60">{description}</div>
    </div>
  </div>
);

export default function Features() {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-4 gap-x-4">
        <FeatureCard
          icon={<ShieldCheckIcon className="w-10 h-10" />}
          title="Safe and Secure"
          description="Security is a priority, your transactions are private between you and your customers."
        />
        <FeatureCard
          icon={<BoltIcon className="w-10 h-10" />}
          title="Lightning Fast"
          description="Receive payments in no time and transfer between currencies effortlessly."
        />
        <FeatureCard
          icon={<CubeTransparentIcon className="w-10 h-10" />}
          title="Easily Integrated"
          description="Use our in-depth API to integrate WorldPay into your applications seamlessly."
        />
      </div>
      <div className="flex flex-col text-center gap-y-6 mt-24">
        <span className="text-5xl font-semibold">How it works</span>
        <div className="text-black/60">
          It's easy to setup and even easier to use, with 24/7 support we'll
          help you get setup.
        </div>
      </div>
      <FeatureSection
        imageSrc="/connections.png"
        title="Link your accounts for withdrawal."
        description="Link with one of our many withdrawal methods and get paid directly into your account with no fees."
      />
      <FeatureSection
        imageSrc="/receipt.png"
        title="Track and monitor payments."
        description="Get updates on your transactions in realtime and let us evaluate the risk and handle the disputes."
      />
      <FeatureSection
        imageSrc="/payment.png"
        title="Integrate into any application with ease."
        description="Setup your own payment url or use our API to embed WorldPay into your application or service."
      />
    </div>
  );
}
