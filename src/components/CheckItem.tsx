export default function CheckItem({
  children,
  size = 'default',
}: {
  children: React.ReactNode;
  size?: 'default' | 'sm';
}) {
  const compact = size === 'sm';

  return (
    <div className="flex gap-4 items-start">
      <div
        className={`rounded-full bg-[#0E3B3A] flex items-center justify-center shrink-0 mt-0.5 ${
          compact ? 'w-5 h-5' : 'w-6 h-6'
        }`}
      >
        <svg
          className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-white`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <div className="text-[#2F6E6B] leading-relaxed">{children}</div>
    </div>
  );
}
