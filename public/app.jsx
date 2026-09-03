const appRoot = document.getElementById('root');

function App() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('');

  const waitlistEnabled =
    window.__FIREBASE_CONFIG__ && window.__FIREBASE_CONFIG__.apiKey;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!waitlistEnabled) {
      setStatus('Waitlist is not configured yet. Add your Firebase config in public/config.js.');
      return;
    }

    try {
      const app = firebase.initializeApp(window.__FIREBASE_CONFIG__);
      const db = firebase.firestore(app);
      await db.collection('waitlist').add({
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        source: 'landing',
      });

      setStatus('You are on the waitlist. We will contact you soon.');
      setEmail('');
    } catch (_error) {
      setStatus('Unable to submit right now. Please try again later.');
    }
  };

  return (
    <main>
      <header>
        <h1>Defentra Security and Technology Solutions</h1>
        <p>
          AI-native cybersecurity products for proactive network defense and resilient digital infrastructure.
        </p>
      </header>

      <section id="about-us">
        <h2>About Us</h2>
        <p>
          We build practical security platforms that combine deep protocol understanding with modern AI.
          Defentra focuses on reducing attacker advantage by moving detection and response closer to packet ingress.
        </p>
      </section>

      <section id="product">
        <h2>Product</h2>
        <h3>TIRLAP - Threat Intelligence Real-time Layer Analysis Platform</h3>
        <p>
          TIRLAP addresses the pre-OS blind spot by introducing interception, stateful correlation,
          anomaly scoring, classification, graph correlation, and adaptive mitigation.
        </p>
        <ul>
          <li>Problem: reactive controls act after kernel/resource exposure.</li>
          <li>Gaps: no pre-OS checks, siloed context, static rules, slow mitigation loops, scattered standards.</li>
          <li>
            Exact solution: an AI-native pipeline with posture audit, deterministic invariants, live flow state,
            statistical anomaly engine, supervised attack labeling, and topological graph correlation.
          </li>
        </ul>
      </section>

      <section id="platform">
        <h2>Platform Approach</h2>
        <p>
          This landing experience is delivered with a MERN-style setup (Node/Express + React) and Firebase-backed
          waitlist storage for rapid deployment and product onboarding.
        </p>
      </section>

      <section id="waitlist">
        <h2>Join the TIRLAP Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit">Request Early Access</button>
        </form>
        <small>{status || 'Signup records are stored in Firebase Firestore collection: waitlist.'}</small>
      </section>
    </main>
  );
}

ReactDOM.createRoot(appRoot).render(<App />);
