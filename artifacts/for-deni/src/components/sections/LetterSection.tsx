import React from 'react';
import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';

const PARAGRAPHS = [
  "Nu știu exact când s-a întâmplat.",
  "Cred că a fost undeva între o conversație la ore ciudate din noapte și momentul în care mi-am dat seama că aștept mesajele tale cu un fel de anticipare pe care nu o mai simțisem de mult. Nu e ceva ce am planuit. Nu am stat să zic «bine, o să mă atașez de persoana asta.» A venit natural, lent, ca toate lucrurile care contează cu adevărat.",
  "Mesajele tale au început să fie parte din rutina mea fără să îmi dau seama. Dimineața, seara, în pauze — fără să fie vreo regulă, era ceva ce se întâmpla pur și simplu. Și când nu apărea nimic, era un gol mic acolo, ceva aproape invizibil, dar care exista.",
  "Îți dai seama ce efect ai? Zâmbesc la telefon când văd că ai scris. Zâmbesc random, la momente total nepotrivite, la conversații banale, la lucruri care nu sunt funny, dar care devin funny pentru că le-ai zis tu. Există ceva în felul în care vorbești — în cuvintele pe care le alegi, în ritmul răspunsurilor tale — care mă face să vreau să continui conversația la nesfârșit.",
  "Tu ești genul de persoană care face conversațiile să pară scurte, indiferent cât durează. Vorbim ore și tot simt că nu am zis destul. Nu pentru că ar lipsi cuvintele, ci pentru că mi-ar plăcea să dureze mai mult.",
  "Nu știu cum faci asta, sincer. Dar mă faci să mă simt ușor. Nu în sensul că nu contează — tocmai invers. Mă faci să mă simt ușor ca în senul că e mai simplu să exist atunci când vorbim. Că lucrurile nu par atât de grele. Că ziua se termină mai bine.",
  "M-am atașat. Nu dramatic, nu în felul ăla care e sufocant. Dar real. M-am atașat de felul tău, de energia ta, de cum îți pasă — de oameni, de lucruri mici, de conversații. Ai un fel de a fi prezentă în orice zici, chiar și în mesaje scurte. Și asta, fata mea, e ceva rar.",
  "Perioada asta a devenit specială. Nu din cauza unor momente mari sau a unor întâmplări extraordinare — ci din cauza ta. Din cauza conversațiilor noastre, a glumelor, a momentelor în care mi-ai spus ceva și mi-am zis «da, exact asta simțeam, dar nu știam cum să îl pun în cuvinte.»",
  "Nu știu ce e asta. Poate e prea devreme să pun o etichetă. Dar știu că ești importantă. Și că asta e real."
];

export default function LetterSection() {
  return (
    <section className="w-full py-32 flex flex-col items-center relative">
      {/* Floating ambient stars for letter section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(255,255,255,0.8)'
            }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <PenTool className="text-secondary opacity-80" size={24} />
        <h2 className="text-3xl font-serif text-white/90">o scrisoare</h2>
      </motion.div>

      <div className="w-full max-w-3xl relative">
        <div className="absolute -inset-4 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent blur-2xl rounded-[3rem] -z-10" />
        
        <div className="bg-[#0c0c11] border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle paper texture noise overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
          
          <div className="space-y-8 relative z-10 font-serif text-lg md:text-xl leading-relaxed text-white/80">
            {PARAGRAPHS.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-12 text-right text-secondary/90 text-2xl"
            >
              — gabi
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
