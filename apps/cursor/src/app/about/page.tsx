export const metadata = {
  title: "Despre PayLinks Jobs",
  description: "De ce am construit PayLinks Jobs",
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto px-6 py-12">
      <h1 className="text-4xl mb-12 mt-20 text-center">
        De ce am construit <br />
        PayLinks Jobs
      </h1>

      <div className="space-y-12 mt-10">
        <section>
          <p className="text-[#878787] leading-relaxed text-sm">
            Am pornit PayLinks Jobs dintr-o nevoie simplă: oamenii au talent, dar nu mereu au acces
            la oportunități. În România, mulți freelanceri, ONG-uri și mici afaceri se luptă să găsească
            proiecte sau colaboratori potriviți, iar atunci când îi găsesc, plata este complicată și lentă.
          </p>
        </section>

        <section>
          <p className="text-[#878787] leading-relaxed text-sm">
            PayLinks schimbă asta. Cu un singur link de plată, oricine poate fi plătit în câteva secunde. Am
            extins această idee și la joburi: vrem ca fiecare persoană cu o abilitate să aibă acces rapid la
            clienți, proiecte și venituri.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-2">Construim PayLinks Jobs ca un loc unde:</h2>
          <ul className="list-disc pl-6 text-[#878787] leading-relaxed text-sm space-y-2">
            <li>Freelancerii își găsesc rapid clienți și sunt plătiți corect.</li>
            <li>Startup-urile și business-urile mici descoperă oameni gata să livreze și să crească împreună.</li>
            <li>ONG-urile și comunitățile pot conecta proiectele lor cu voluntari sau colaboratori dedicați.</li>
            <li>Oricine are o idee sau un skill poate monetiza fără bariere.</li>
          </ul>
        </section>

        <section>
          <p className="text-[#878787] leading-relaxed text-sm">
            Pentru noi, nu e doar un director de joburi. Este o misiune: să ajutăm cât mai mulți români să câștige
            un trai decent online, fără birocrație, fără pierdere de timp, fără complicații.
          </p>
        </section>

        <section>
          <p className="text-[#878787] leading-relaxed text-sm">
            PayLinks Jobs este despre oportunitate, încredere și viteză. Dacă ai ceva de oferit, vrem ca lumea să te
            poată găsi și să fii plătit imediat.
          </p>
        </section>
      </div>
    </div>
  );
}
