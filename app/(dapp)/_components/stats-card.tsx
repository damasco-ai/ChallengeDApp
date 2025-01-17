import React from "react";

import { type LucideProps } from "lucide-react";

import { formatNumber } from "@/lib/number";

type Props = {
  label: string;
  value: number;

  withFormat?: boolean;

  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const StatsCard: React.FC<Props> = ({ label, value, withFormat, Icon }) => {
  return (
    <div className="border-2 bg-background border-black p-4 shadow-[4px_4px_0_0_black]">
      <div className="flex flex-row gap-2 items-center mb-1">
        <Icon className="w-5 h-5 text-primary" />
        <span className="text-lg font-semibold font-display">{label}</span>
      </div>
      <span className="text-4xl font-number font-bold">
        {withFormat ? formatNumber(value) : value}
      </span>
    </div>
  );
};

export default StatsCard;
