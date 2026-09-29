import { Header } from './Header';
import { Footer } from './Footer';

export const LegalShell = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <Header />
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8">
      <div className="legal-content">
        <h1>{title}</h1>
        {children}
      </div>
    </main>
    <Footer />
  </>
);
