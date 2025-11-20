import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import { CardGrid } from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="overview"
          eyebrow="Overview"
          title="What is cancer?"
          lead="Cancer is a group of diseases where abnormal cells grow uncontrollably and can spread to other parts of the body. Early information, prevention, and screening save lives."
        >
          <CardGrid
            items={[
              {
                title: 'How it starts',
                desc: 'Changes (mutations) in DNA cause cells to grow and divide faster than normal. These cells can form a mass called a tumor.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                ),
              },
              {
                title: 'Types',
                desc: 'Common types include breast, lung, colorectal, prostate, skin, and blood cancers. Each type behaves differently.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                ),
              },
            ]}
          />
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 mt-6">
            <p className="text-sm text-rose-900">
              Note: This content is for educational purposes. Always consult licensed healthcare professionals for personal medical advice.
            </p>
          </div>
        </Section>

        <Section
          id="symptoms"
          eyebrow="Awareness"
          title="Common symptoms"
          lead="Symptoms vary by cancer type. Persistent or unusual changes are worth checking with a clinician."
        >
          <CardGrid
            items={[
              { title: 'Unexplained weight loss', desc: 'Losing weight without trying could be a sign. Other causes are common—evaluation helps clarify.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21V7a2 2 0 0 0-2-2h-5"/><path d="M8 21V3H6a2 2 0 0 0-2 2v16"/><path d="M16 3l-4 4H8"/></svg>) },
              { title: 'Lumps or swelling', desc: 'New or changing lumps under skin or in breast, neck, armpits, or groin should be assessed.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 1 1 0-8h10a4 4 0 0 1 4 4Z"/></svg>) },
              { title: 'Persistent cough/voice changes', desc: 'A cough that doesn\'t go away or hoarseness can be a sign—especially in smokers.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8v8"/><path d="M22 12h-6"/><path d="M6 8v8"/></svg>) },
              { title: 'Unexpected bleeding', desc: 'Blood in stool/urine, abnormal vaginal bleeding, or coughing blood requires prompt care.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10Z"/></svg>) },
            ]}
          />
        </Section>

        <Section
          id="prevention"
          eyebrow="Prevention"
          title="Reduce your risk"
          lead="Evidence-based habits lower risk over time. Small, consistent changes make a difference."
        >
          <CardGrid
            items={[
              { title: 'Don\'t smoke', desc: 'Avoid tobacco and exposure to secondhand smoke. Seek cessation support—medications and counseling help most people.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13h15"/><path d="M19 13h2a2 2 0 1 1 0 4h-2"/></svg>) },
              { title: 'Vaccinate', desc: 'HPV and Hepatitis B vaccines prevent cancers linked to these viruses. Ask your provider about eligibility.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22V2"/><path d="M7 7h10"/></svg>) },
              { title: 'Sun safety', desc: 'Use sunscreen SPF 30+, wear hats, and avoid tanning beds. Check skin regularly for changes.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>) },
              { title: 'Move and nourish', desc: 'Aim for regular physical activity, a plant-forward diet, and moderate alcohol. Maintain a healthy weight.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7a4 4 0 0 1 4-4h8"/><path d="M12 7V3"/></svg>) },
            ]}
          />
        </Section>

        <Section
          id="screening"
          eyebrow="Early Detection"
          title="Screening recommendations"
          lead="Screening catches cancers earlier when they\'re most treatable. Follow age and risk-based guidance."
        >
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white/80">
              <h3 className="font-semibold text-lg">Breast cancer</h3>
              <p className="mt-2 text-slate-700 text-sm">Most organizations recommend mammography every 1–2 years starting at age 40–50. Discuss timing and frequency based on personal risk.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white/80">
              <h3 className="font-semibold text-lg">Colorectal cancer</h3>
              <p className="mt-2 text-slate-700 text-sm">Begin screening at age 45 for average risk. Options include colonoscopy, stool tests, or flexible sigmoidoscopy. Frequency depends on method.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white/80">
              <h3 className="font-semibold text-lg">Cervical cancer</h3>
              <p className="mt-2 text-slate-700 text-sm">HPV testing and Pap tests begin around 21–25 depending on guidance. Intervals vary (3–5 years) based on results and age.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white/80">
              <h3 className="font-semibold text-lg">Lung cancer</h3>
              <p className="mt-2 text-slate-700 text-sm">Annual low-dose CT scans are recommended for select adults 50–80 with significant smoking history. Eligibility is specific—ask your clinician.</p>
            </div>
          </div>
        </Section>

        <Section
          id="treatment"
          eyebrow="Care"
          title="How cancer is treated"
          lead="Treatment plans are individualized and may include a combination of approaches."
        >
          <CardGrid
            items={[
              { title: 'Surgery', desc: 'Removes the tumor and some surrounding tissue. Often used for localized cancers.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h18"/><path d="M9 21l6-6-6-6"/></svg>) },
              { title: 'Radiation therapy', desc: 'Targets high-energy beams at cancer cells to damage their DNA and stop growth.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M2 12h20"/></svg>) },
              { title: 'Chemotherapy', desc: 'Drugs that travel through the bloodstream to kill rapidly dividing cells.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>) },
              { title: 'Targeted & immunotherapy', desc: 'Medicines designed to attack specific changes in cancer cells or help the immune system fight cancer.', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 1 1 0-8h10a4 4 0 0 1 4 4Z"/></svg>) },
            ]}
          />
        </Section>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-blue-500 p-1">
              <div className="rounded-3xl bg-white p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Stay proactive with your health</h3>
                  <p className="mt-3 text-slate-700">Create reminders for screenings, track symptoms, and speak with a healthcare professional when something feels off.</p>
                </div>
                <div className="text-right">
                  <a href="#screening" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
                    Learn about screening
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default App
