
export type FilterKey = 'all' | 'active' | 'completed';

interface Props {
  current: FilterKey;
  counts: Record<FilterKey, number>;
  onChange: (f: FilterKey) => void;
}

export default function FilterBar({ current, counts, onChange }: Props) {
  const items: { key: FilterKey; label: string }[] = [
    { key: 'all',       label: `전체 (${counts.all})` },
    { key: 'active',    label: `진행중 (${counts.active})` },
    { key: 'completed', label: `완료 (${counts.completed})` }
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
            current === key ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
