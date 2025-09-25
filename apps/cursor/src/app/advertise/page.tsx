import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Fă publicitate pe Cursor Directory",
  description:
    "Ajunge la peste 120.000 de dezvoltatori lunar și prezintă-ți produsul sau serviciul pe Cursor Directory, platforma comunității pentru reguli și prompturi Cursor AI.",
};

export default function Advertise() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto px-6 py-12 pb-32">
        <h1 className="text-4xl mb-12 mt-20 text-center">
          Fă publicitate pe <br />
          Cursor Directory
        </h1>

        <div className="space-y-12 mt-10">
          <section>
            <h2 className="text-xl mb-2">Ajunge la o audiență de dezvoltatori implicați</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Cursor Directory atrage peste {" "}
              <a
                href="https://dashboard.openpanel.dev/share/overview/a5hhbY?range=6m"
                className="text-primary border-border border-dashed border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                250.000 de vizitatori unici lunar
              </a>{" "}
              — iar numărul este în creștere constantă. Audiența noastră este formată din dezvoltatori,
              lideri tehnici și factori de decizie care caută activ modalități de a-și îmbunătăți fluxul de lucru
              și productivitatea.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">De ce să faci publicitate la noi</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Comunitatea noastră este foarte implicată în instrumente pentru dezvoltatori, soluții AI
              și îmbunătățitoare de productivitate. Dacă oferi instrumente pentru dezvoltatori, API-uri,
              servicii cloud sau orice produs tech, platforma noastră îți oferă acces direct la audiența ideală.
              Utilizatorii noștri sunt early adopters care influențează activ alegerile tehnologice
              din organizațiile lor.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Audiența noastră</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              • Ingineri software și dezvoltatori (65%)
              <br />• Lideri tehnici și Engineering Managers (20%)
              <br />• Fondatori de startup și CTO (10%)
              <br />• Alți profesioniști tehnici (5%)
              <br />
              <br />
              Vizitatorii noștri provin din companii tech de top, startup-uri inovatoare și agenții de dezvoltare din întreaga lume,
              uniți de interesul pentru instrumente de dezvoltare îmbunătățite cu AI și optimizarea fluxului de lucru.
              <br />
              <br />
              Vezi {" "}
              <a
                href="https://dashboard.openpanel.dev/share/overview/a5hhbY?range=30d"
                className="text-primary border-border border-dashed border-b-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                dashboard-ul nostru de analytics în timp real
              </a>{" "}
              pentru statistici actualizate ale vizitatorilor.
            </p>
          </section>

          <section>
            <h2 className="text-xl mb-2">Opțiuni de publicitate</h2>
            <p className="text-[#878787] leading-relaxed text-sm">
              Oferim diverse oportunități de publicitate, inclusiv:
              <br />• Listări evidențiate în director
              <br />• Conținut sponsorizat și tutoriale
              <br />• Sponsorizări în newsletter
              <br />• Oportunități de parteneriat personalizate
              <br />
              <br />
              Contactează-l pe Pontus la {" "}
              <a
                href="https://twitter.com/pontusab"
                className="text-primary border-border border-dashed border-b-[1px]"
              >
                @pontusab
              </a>{" "}
              pentru a discuta cum te putem ajuta să ajungi la comunitatea noastră de dezvoltatori implicați.
            </p>

            <p className="text-primary mt-8 text-sm w-full">
              <Button asChild className="w-full">
                <a href="https://buy.polar.sh/polar_cl_XZNMJtIvsTBndqeeVF5Xf1CNMBzpb0N69IpOc0hhCpX">
                  Cumpără un spațiu publicitar
                </a>
              </Button>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
