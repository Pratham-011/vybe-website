import Image from 'next/image';

/** A real iPhone-style device frame (Dynamic Island, side buttons) wrapping
 *  an actual screenshot of the app — not an illustration. */
export const PhoneFrame = ({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`relative mx-auto w-[260px] sm:w-[300px] ${className}`}>
    {/* Side buttons */}
    <span aria-hidden className="absolute -left-[3px] top-[86px] h-6 w-[3px] rounded-l-sm bg-[#2a2a2e] sm:top-[100px] sm:h-7" />
    <span aria-hidden className="absolute -left-[3px] top-[122px] h-9 w-[3px] rounded-l-sm bg-[#2a2a2e] sm:top-[142px] sm:h-11" />
    <span aria-hidden className="absolute -left-[3px] top-[168px] h-9 w-[3px] rounded-l-sm bg-[#2a2a2e] sm:top-[196px] sm:h-11" />
    <span aria-hidden className="absolute -right-[3px] top-[130px] h-14 w-[3px] rounded-r-sm bg-[#2a2a2e] sm:top-[150px] sm:h-16" />

    <div className="relative rounded-[44px] border-[6px] border-[#2a2a2e] bg-black p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:rounded-[52px]">
      <div className="relative h-[520px] overflow-hidden rounded-[38px] bg-[var(--vybe-bg)] sm:h-[600px] sm:rounded-[46px]">
        <Image src={src} alt={alt} fill sizes="300px" className="object-cover object-top" />
        {/* Dynamic Island */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[10px] h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-[22px] sm:w-[100px]"
        />
      </div>
    </div>
  </div>
);
