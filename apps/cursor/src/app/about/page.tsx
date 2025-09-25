import Image from "next/image";

export const metadata = {
  title: "Despre Cursor Directory",
  description: "De ce am construit Cursor Directory",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto px-6 py-12">
      <h1 className="text-4xl mb-12 mt-20 text-center">
        De ce am construit <br />
        Cursor Directory
      </h1>

      <div className="space-y-12 mt-10">
        <section>
          <p className="text-[#878787] leading-relaxed text-sm">
            Călătoria noastră cu Cursor a fost transformatoare. Ca o echipă formată dintr-un
            dezvoltator și un designer, am experimentat din prima mână cum Cursor
            a accelerat semnificativ procesul nostru de dezvoltare. Acest plus de eficiență
            ne-a oferit resursele să construim cele două startup-uri ale noastre,{" "}
            <a
              href="https://go.midday.ai/8cX3F4o"
              className="text-primary border-border border-dashed border-b-[1px]"
            >
              Midday
            </a>{" "}
            și {" "}
            <a
              href="https://go.midday.ai/NnI1CUO"
              className="text-primary border-border border-dashed border-b-[1px]"
            >
              Languine
            </a>{" "}
            cu o viteză incredibilă.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-2">Abordarea noastră</h2>
          <p className="text-[#878787] leading-relaxed text-sm">
            Ca o companie finanțată din resurse proprii, credem în creșterea sustenabilă și
            menținerea controlului deplin asupra viziunii produsului. Construim platformele
            cu grijă, prioritizând nevoile utilizatorilor în fața scalării rapide.
            Cu Midday, eficientizăm operațiunile de business, iar cu Languine,
            construim infrastructură de localizare care ajută startup-urile rapide
            să ajungă la audiențe globale fără a încetini ritmul de dezvoltare.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-2">Angajamentul față de open-source</h2>
          <p className="text-[#878787] leading-relaxed text-sm">
            Suntem profund dedicați principiilor open-source. Atât Midday, cât și
            Languine sunt construite în mod public, cu transparența în centru.
            Credem că colaborarea cu comunitatea duce la produse mai bune și suntem
            mândri să contribuim înapoi la ecosistemul open-source. Acest angajament
            rămâne central pentru misiunea noastră, chiar și pe măsură ce creștem și evoluăm.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-2">Urmărește-ne călătoria</h2>
          <p className="text-[#878787] leading-relaxed text-sm">
            Urmărește {" "}
            <a
              href="https://x.com/pontusab"
              className="text-primary hover:underline"
            >
              @pontusab
            </a>{" "}
            și {" "}
            <a
              href="https://x.com/viktorhofte"
              className="text-primary hover:underline"
            >
              @viktorhofte
            </a>{" "}
            pe X pentru a rămâne la curent cu cele mai recente noutăți despre Midday și
            Languine.
          </p>
        </section>
      </div>

      <Image
        src="https://midday.ai/cdn-cgi/image/width=1920,quality=80//_next/static/media/founders.c6158766.png"
        alt="Fondatorii Midday"
        width={1920}
        height={1080}
        className="rounded-lg mb-12 mt-12"
      />
    </div>
  );
}
