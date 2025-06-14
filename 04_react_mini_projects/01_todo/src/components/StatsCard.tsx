// src/components/StatsCard.tsx
import React from 'react';

interface Props {
  icon: React.ReactNode;
  label: string;
  count: number;
  bgColor: string
  textColor: string;
}

export default function StatsCard({ icon, label, count, textColor, bgColor }: Props) {
  return (
    <div className={`p-6 rounded-lg text-center ${textColor} ${bgColor} shadow-sm`}>
      <div className="mb-2">{icon}</div>
      <p className="text-sm">{label}</p>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}
