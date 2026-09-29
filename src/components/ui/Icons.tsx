/* Marki zewnętrzne — ikony SVG (nie emoji). */

export function MessengerIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 2C8.268 2 2 7.924 2 15.25c0 4.18 2.158 7.902 5.5 10.312V30l4.314-2.352c1.326.414 2.724.632 4.186.632C23.732 28.28 30 22.576 30 15.25 30 7.924 23.732 2 16 2Z"
        fill="currentColor"
      />
      <path d="M17.4 19 14.2 15.5 8 19l6.8-7.5 3.3 3.5L24.2 11.5 17.4 19Z" fill="#0B0A08" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.511.661 4.867 1.818 6.905L2 31l7.315-1.696C11.301 30.385 13.579 31 16 31Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 17.7c0 3.535-2.91 6.4-6.5 6.4-1.151 0-2.235-.268-3.2-.746L10 24.1l.77-3.131C10.2 20.006 9.9 18.89 9.9 17.7c0-3.535 2.91-6.4 6.5-6.4s6.6 2.865 6.6 6.4Z"
        fill="#0B0A08"
      />
      <path
        d="M19.3 18.9c-.2-.1-1-.5-1.1-.6-.2 0-.3-.1-.5.1-.2.2-.5.6-.6.7-.2.1-.3.1-.5 0-.2-.1-.7-.3-1.3-.8-.5-.4-.8-.9-1-1.1-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3s-.4-1-.5-1.4c-.1-.4-.3-.3-.4-.3h-.3c-.2 0-.4.1-.6.3-.2.2-.6.6-.6 1.4 0 .8.6 1.6.7 1.7.1.1 1.3 1.9 3.1 2.6 1.2.5 1.6.5 2.1.4.3-.1 1-.5 1.1-.9.2-.4.2-.8.1-.8 0-.1-.1-.1-.3-.2Z"
        fill="#0B0A08"
      />
    </svg>
  );
}

export function FacebookIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Złote narożniki — motyw z logo. */
export function Corners({ className = "", inset = "inset-3" }: { className?: string; inset?: string }) {
  const base = `absolute ${inset} pointer-events-none ${className}`;
  const w = "w-4 h-4 border-gold/70";
  return (
    <span aria-hidden className={base}>
      <span className={`absolute left-0 top-0 border-l border-t ${w}`} />
      <span className={`absolute right-0 top-0 border-r border-t ${w}`} />
      <span className={`absolute left-0 bottom-0 border-l border-b ${w}`} />
      <span className={`absolute right-0 bottom-0 border-r border-b ${w}`} />
    </span>
  );
}
