export const metadata = {
  title: "Fă publicitate pe PayLinks.ro",
  description:
    "Ajunge la o audiență de freelanceri, antreprenori și business-uri în creștere pe PayLinks.ro. Promovează servicii, produse digitale și soluții financiare către o comunitate activă și orientată spre acțiune.",
};

export default function Advertise() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto px-6 py-12 pb-32">
        <h1 className="text-4xl mb-12 mt-20 text-center">
          Fă publicitate pe <br />
          PayLinks.ro
        </h1>

        <div className="space-y-12 mt-10">
          <section>
            <h2 className="text-xl mb-2">Ajunge la o audiență de freelanceri, antreprenori și business-uri în creștere</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              PayLinks.ro atrage zilnic utilizatori care caută soluții simple de plată, oportunități de venit și
              instrumente digitale pentru a-și dezvolta afacerea. Audiența noastră este formată din freelanceri,
              creatori de conținut, fondatori de startup, ONG-uri și profesioniști care iau decizii rapide și sunt
              mereu în căutarea de resurse care le pot accelera creșterea.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">De ce să faci publicitate la noi</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Comunitatea PayLinks este activă, implicată și orientată spre acțiune. Dacă oferi servicii, produse
              digitale, soluții financiare, instrumente de marketing sau orice poate ajuta oamenii să câștige bani
              mai ușor, platforma noastră îți oferă acces direct la publicul potrivit. Utilizatorii PayLinks sunt
              early adopters care testează rapid și recomandă soluțiile care funcționează.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Audiența noastră</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              • Freelanceri și creatori independenți (45%)
              <br />• Antreprenori și startup founders (25%)
              <br />• ONG-uri și inițiative comunitare (15%)
              <br />• Profesioniști din servicii, educație și wellness (15%)
              <br />
              <br />
              Vizitatorii noștri provin din România și diaspora, dar și din ecosistemul global de freelancing și
              business digital — toți uniți de dorința de a monetiza mai rapid și mai simplu.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Opțiuni de publicitate</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Oferim diverse oportunități de promovare, inclusiv:
              <br />• Listări evidențiate în directorul PayLinks Jobs
              <br />• Conținut sponsorizat și articole educative
              <br />• Sponsorizări în newsletter-ul PayLinks
              <br />• Oportunități de parteneriat și campanii personalizate
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Contact</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Scrie-ne la <a className="text-primary border-border border-dashed border-b-[1px]" href="mailto:salut@paylinks.ro">salut@paylinks.ro</a>
              {" "}și hai să discutăm cum te putem ajuta să ajungi la comunitatea noastră de freelanceri și antreprenori implicați.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
