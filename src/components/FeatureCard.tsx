export const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-[var(--vybe-radius-card)] border border-[var(--vybe-hairline)] bg-[var(--vybe-surface)] p-6 transition hover:border-[var(--vybe-pink-soft)]">
    <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[var(--vybe-pink-soft)] text-[var(--vybe-pink)]">
      {icon}
    </div>
    <h3 className="mb-1.5 font-[var(--font-display)] text-[17px] font-bold text-[var(--vybe-text)]">{title}</h3>
    <p className="text-[13.5px] leading-relaxed text-[var(--vybe-text-muted)]">{description}</p>
  </div>
);
