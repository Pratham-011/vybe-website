'use client';

export const ScrollToCommunityLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#community"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="font-semibold text-[var(--vybe-pink)] hover:underline"
  >
    {children}
  </a>
);
