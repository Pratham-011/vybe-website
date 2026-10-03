import Image from 'next/image';
import Link from 'next/link';
import { GetStartedButton } from './GetStartedButton';

export const Header = () => (
  <header className="sticky top-0 z-40 border-b border-[var(--vybe-hairline)] bg-[var(--vybe-bg)]/80 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/vybe-mark.png" alt="" width={120} height={115} className="h-8 w-auto" priority />
        <span className="font-[var(--font-display)] text-lg font-extrabold tracking-tight">
          vybe<span className="text-[var(--vybe-pink)]">.</span>date
        </span>
      </Link>

      <GetStartedButton className="!px-4 !py-2.5 !text-[13px]" />
    </div>
  </header>
);
