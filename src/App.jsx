import { useState } from "react";
import {
  AlertTriangle,
  Bell,
  MapPin,
  ShieldCheck,
  Navigation,
  CloudRain,
  Hospital,
  Radio,
  Activity,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import "./App.css";

const facilities = [
  { name: "Government Hospital", type: "Hospital", distance: "2.4 km", status: "Ready" },
  { name: "Community Shelter", type: "Shelter", distance: "3.1 km", status: "Ready" },
  { name: "Fire & Rescue Station", type: "Emergency", distance: "4.7 km", status: "Standby" },
];

function App() {
  const [risk, setRisk] = useState(72);
  const [menu, setMenu] = useState(false);
  const [alertActive, setAlertActive] = useState(true);

  const riskLevel =
    risk >= 61 ? "HIGH" : risk >= 31 ? "MODERATE" : "LOW";

  const riskColor =
    risk >= 61 ? "danger" : risk >= 31 ? "warning" : "safe";

  const simulate = () => {
    setRisk(Math.floor(Math.random() * 31) + 65);
    setAlertActive(true);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brandIcon">
            <ShieldCheck size={25} />
          </div>
          <div>
            <h2>SAFESETU</h2>
            <span>Disaster Intelligence</span>
          </div>
        </div>

        <div className="navLinks">
          <a className="active">Overview</a>
          <a>Risk Map</a>
          <a>Alerts</a>
          <a>Facilities</a>
          <button onClick={simulate}>Simulate Event</button>
        </div>

        <button className="menuBtn" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </nav>

      {menu && (
        <div className="mobileMenu">
          <a>Overview</a>
          <a>Risk Map</a>
          <a>Alerts</a>
          <a>Facilities</a>
          <button onClick={simulate}>Simulate Disaster</button>
        </div>
      )}

      {/* HERO */}
      <main>

        <section className="hero">
          <div>
            <div className="location">
              <MapPin size={17} />
              <span>Narela, Delhi</span>
              <span className="live">● LIVE</span>
            </div>

            <h1>
              Know the risk.
              <br />
              <span>Act before impact.</span>
            </h1>

            <p>
              SAFESETU combines local disaster history, live hazard
              signals and vulnerability to provide hyperlocal
              risk intelligence.
            </p>

            <div className="heroButtons">
              <button className="primary" onClick={simulate}>
                <Activity size={18} />
                Simulate Disaster
              </button>

              <button className="secondary">
                View Risk Map
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          {/* RISK CARD */}
          <div className={`riskCard ${riskColor}`}>
            <div className="riskTop">
              <span>CURRENT LOCAL RISK</span>
              <Activity size={20} />
            </div>

            <div className="riskNumber">
              {risk}
              <small>/100</small>
            </div>

            <div className="riskStatus">
              <span className={`dot ${riskColor}`} />
              {riskLevel} RISK
            </div>

            <div className="progress">
              <div style={{ width: `${risk}%` }} />
            </div>

            <div className="riskFactors">
              <div>
                <span>Historical</span>
                <b>25</b>
              </div>
              <div>
                <span>Live Hazard</span>
                <b>30</b>
              </div>
              <div>
                <span>Vulnerability</span>
                <b>15</b>
              </div>
            </div>
          </div>
        </section>

        {/* ALERT */}
        {alertActive && (
          <section className="alertBanner">
            <div className="alertIcon">
              <AlertTriangle />
            </div>

            <div className="alertText">
              <span>ACTIVE ALERT • FLOOD RISK</span>
              <h3>Elevated flood risk detected in your locality</h3>
              <p>
                Heavy rainfall combined with historical vulnerability
                has increased the local risk score.
              </p>
            </div>

            <button onClick={() => setAlertActive(false)}>
              View precautions
              <ChevronRight size={17} />
            </button>
          </section>
        )}

        {/* DASHBOARD GRID */}
        <section className="dashboard">

          {/* MAP */}
          <div className="panel mapPanel">
            <div className="panelHeader">
              <div>
                <span className="eyebrow">LIVE MONITORING</span>
                <h2>Hyperlocal Risk Map</h2>
              </div>

              <div className="mapLegend">
                <span><i className="red" /> High</span>
                <span><i className="yellow" /> Moderate</span>
                <span><i className="green" /> Low</span>
              </div>
            </div>

            <div className="fakeMap">

              <div className="mapGrid" />

              <div className="zone zone1" />
              <div className="zone zone2" />
              <div className="zone zone3" />

              <div className="mapPin mainPin">
                <MapPin />
              </div>

              <div className="mapLabel">
                <b>Narela Ward</b>
                <span>Risk: {risk}/100</span>
              </div>

              <div className="facilityPin facility1">
                <Hospital size={16} />
              </div>

              <div className="facilityPin facility2">
                <ShieldCheck size={16} />
              </div>

              <div className="mapControls">
                <button>+</button>
                <button>−</button>
              </div>
            </div>
          </div>

          {/* SYSTEM STATUS */}
          <div className="panel statusPanel">
            <div className="panelHeader">
              <div>
                <span className="eyebrow">SYSTEM</span>
                <h2>Signal Status</h2>
              </div>

              <Radio size={20} />
            </div>

            <div className="signal">
              <div className="signalIcon greenBg">
                <ShieldCheck />
              </div>
              <div>
                <b>Official Alerts</b>
                <span>Connected</span>
              </div>
              <i className="online" />
            </div>

            <div className="signal">
              <div className="signalIcon blueBg">
                <CloudRain />
              </div>
              <div>
                <b>Weather Signals</b>
                <span>Receiving data</span>
              </div>
              <i className="online" />
            </div>

            <div className="signal">
              <div className="signalIcon purpleBg">
                <Activity />
              </div>
              <div>
                <b>Risk Engine</b>
                <span>Operational</span>
              </div>
              <i className="online" />
            </div>

            <div className="offline">
              <span>●</span>
              Offline fallback ready
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="facilitiesSection">
          <div className="sectionHeading">
            <div>
              <span className="eyebrow">RESPONSE NETWORK</span>
              <h2>Nearby Facilities</h2>
            </div>

            <button className="viewAll">
              View all <ChevronRight size={16} />
            </button>
          </div>

          <div className="facilityGrid">
            {facilities.map((facility, index) => (
              <div className="facilityCard" key={index}>
                <div className="facilityIcon">
                  {index === 0 ? (
                    <Hospital />
                  ) : index === 1 ? (
                    <ShieldCheck />
                  ) : (
                    <AlertTriangle />
                  )}
                </div>

                <div className="facilityInfo">
                  <span>{facility.type}</span>
                  <h3>{facility.name}</h3>

                  <div className="facilityMeta">
                    <span>
                      <Navigation size={14} />
                      {facility.distance}
                    </span>

                    <span className="ready">
                      ● {facility.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* MOBILE BOTTOM NAV */}
      <div className="bottomNav">
        <div className="bottomActive">
          <Activity />
          <span>Overview</span>
        </div>

        <div>
          <Navigation />
          <span>Map</span>
        </div>

        <div>
          <Bell />
          <span>Alerts</span>
        </div>

        <div>
          <Hospital />
          <span>Facilities</span>
        </div>
      </div>

    </div>
  );
}

export default App;
