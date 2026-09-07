<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SafeSetu — Disaster Readiness Platform</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>
:root{
  --navy:#0B1F33;
  --navy2:#102D48;
  --blue:#1769AA;
  --blue2:#4D9DE0;
  --green:#21A366;
  --yellow:#F2C94C;
  --orange:#F2994A;
  --red:#D64545;
  --bg:#F5F7FA;
  --card:#FFFFFF;
  --text:#172B4D;
  --muted:#6B7A90;
  --border:#E3E8EF;
  --shadow:0 8px 30px rgba(11,31,51,.07);
  --radius:18px;
}

*{box-sizing:border-box;margin:0;padding:0}

body{
  font-family:Inter,Arial,sans-serif;
  background:var(--bg);
  color:var(--text);
}

button,input,textarea,select{font:inherit}

button{cursor:pointer}

.app{
  min-height:100vh;
  display:flex;
}

/* SIDEBAR */

.sidebar{
  width:250px;
  background:var(--navy);
  color:white;
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  padding:24px 16px;
  z-index:100;
}

.logo{
  display:flex;
  align-items:center;
  gap:12px;
  padding:5px 10px 30px;
}

.logo-icon{
  width:42px;
  height:42px;
  background:#1769AA;
  border-radius:13px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
}

.logo-text{
  font-size:21px;
  font-weight:800;
  letter-spacing:-.5px;
}

.logo-text span{color:#62B6FF}

.nav-title{
  color:#7890A8;
  font-size:10px;
  font-weight:700;
  letter-spacing:1.3px;
  padding:10px 12px;
  text-transform:uppercase;
}

.nav-btn{
  width:100%;
  border:0;
  background:transparent;
  color:#B9C7D5;
  padding:12px;
  margin:2px 0;
  border-radius:11px;
  display:flex;
  align-items:center;
  gap:12px;
  text-align:left;
  font-size:13px;
  font-weight:600;
}

.nav-btn:hover,
.nav-btn.active{
  background:#173A59;
  color:white;
}

.nav-icon{
  width:22px;
  text-align:center;
  font-size:17px;
}

.demo-box{
  position:absolute;
  bottom:22px;
  left:16px;
  right:16px;
  padding:13px;
  border-radius:13px;
  background:#142F49;
  border:1px solid #244B6B;
}

.demo-box strong{
  display:block;
  font-size:11px;
  color:#FFD76A;
  margin-bottom:4px;
}

.demo-box small{
  color:#91A5B9;
  font-size:10px;
  line-height:1.4;
}

/* MAIN */

.main{
  margin-left:250px;
  width:calc(100% - 250px);
  min-height:100vh;
}

.topbar{
  height:72px;
  background:white;
  border-bottom:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 32px;
  position:sticky;
  top:0;
  z-index:50;
}

.top-title h2{
  font-size:17px;
  font-weight:750;
}

.top-title p{
  color:var(--muted);
  font-size:11px;
  margin-top:3px;
}

.top-actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.status{
  padding:7px 11px;
  border-radius:20px;
  background:#E9F8F0;
  color:#147A49;
  font-size:11px;
  font-weight:700;
}

.avatar{
  width:35px;
  height:35px;
  background:#DCEBFA;
  color:var(--blue);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  font-weight:800;
}

.content{
  padding:28px 32px 50px;
  max-width:1500px;
  margin:auto;
}

/* VIEWS */

.view{display:none}
.view.active{display:block}

.section-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin-bottom:22px;
}

.section-head h1{
  font-size:26px;
  letter-spacing:-.7px;
}

.section-head p{
  color:var(--muted);
  font-size:12px;
  margin-top:6px;
}

.page-tag{
  font-size:10px;
  color:var(--blue);
  background:#EAF4FD;
  padding:7px 10px;
  border-radius:20px;
  font-weight:700;
}

/* CARDS */

.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
}

.card-pad{padding:20px}

.grid{
  display:grid;
  gap:18px;
}

.grid-4{
  grid-template-columns:repeat(4,1fr);
}

.grid-3{
  grid-template-columns:repeat(3,1fr);
}

.grid-2{
  grid-template-columns:repeat(2,1fr);
}

.metric{
  padding:19px;
  position:relative;
  overflow:hidden;
}

.metric-label{
  font-size:11px;
  color:var(--muted);
  font-weight:600;
}

.metric-value{
  font-size:29px;
  font-weight:800;
  margin-top:9px;
  letter-spacing:-1px;
}

.metric-foot{
  margin-top:7px;
  font-size:10px;
  color:var(--muted);
}

.metric-icon{
  position:absolute;
  right:17px;
  top:17px;
  width:38px;
  height:38px;
  border-radius:11px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#EEF5FB;
  font-size:18px;
}

/* RISK */

.risk-card{
  min-height:270px;
  background:linear-gradient(135deg,#0B1F33,#153E60);
  color:white;
  padding:27px;
  border-radius:22px;
  position:relative;
  overflow:hidden;
}

.risk-card:after{
  content:"";
  position:absolute;
  width:230px;
  height:230px;
  border:35px solid rgba(255,255,255,.05);
  border-radius:50%;
  right:-100px;
  top:-80px;
}

.risk-top{
  display:flex;
  justify-content:space-between;
  position:relative;
  z-index:2;
}

.eyebrow{
  font-size:10px;
  letter-spacing:1.2px;
  font-weight:800;
  opacity:.65;
}

.location{
  margin-top:6px;
  font-size:13px;
  font-weight:600;
}

.risk-score{
  margin-top:30px;
  display:flex;
  align-items:end;
  gap:9px;
}

.risk-number{
  font-size:62px;
  font-weight:800;
  letter-spacing:-4px;
  line-height:.9;
}

.risk-denom{
  color:#91A9BF;
  font-size:14px;
  padding-bottom:7px;
}

.risk-tier{
  display:inline-block;
  margin-top:13px;
  padding:7px 12px;
  border-radius:20px;
  background:rgba(242,153,74,.17);
  color:#FFC077;
  font-size:10px;
  font-weight:800;
}

.risk-desc{
  position:absolute;
  right:30px;
  bottom:28px;
  width:42%;
  color:#C5D4E1;
  font-size:11px;
  line-height:1.6;
  z-index:2;
}

/* PROGRESS */

.factor{
  margin:14px 0;
}

.factor-head{
  display:flex;
  justify-content:space-between;
  font-size:11px;
  margin-bottom:7px;
}

.factor-head span:last-child{
  font-weight:800;
}

.progress{
  height:8px;
  border-radius:20px;
  background:#E9EDF2;
  overflow:hidden;
}

.progress i{
  display:block;
  height:100%;
  border-radius:20px;
  transition:width 1s ease;
}

/* BUTTONS */

.btn{
  border:0;
  border-radius:10px;
  padding:10px 14px;
  font-size:11px;
  font-weight:700;
}

.btn-primary{
  background:var(--blue);
  color:white;
}

.btn-primary:hover{background:#12588F}

.btn-outline{
  background:white;
  color:var(--text);
  border:1px solid var(--border);
}

.btn-green{
  background:#E8F7EF;
  color:#147A49;
}

.btn-orange{
  background:#FFF1E5;
  color:#B85C10;
}

.btn-red{
  background:#FDECEC;
  color:#A92828;
}

.btn-row{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}

/* HOME */

.home-layout{
  display:grid;
  grid-template-columns:1.5fr 1fr;
  gap:18px;
}

.home-right{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.alert-card{
  padding:20px;
}

.alert-title{
  display:flex;
  align-items:center;
  gap:10px;
}

.alert-dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:var(--orange);
}

.alert-card h3{
  font-size:14px;
}

.alert-card p{
  font-size:11px;
  color:var(--muted);
  line-height:1.55;
  margin:10px 0 14px;
}

.alert-meta{
  font-size:10px;
  color:var(--muted);
}

.facility{
  padding:20px;
}

.facility-title{
  font-size:11px;
  color:var(--muted);
  font-weight:600;
}

.facility-name{
  font-weight:750;
  font-size:14px;
  margin:8px 0;
}

.facility-info{
  display:flex;
  justify-content:space-between;
  font-size:10px;
  color:var(--muted);
}

.quick-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  margin-top:18px;
}

.quick{
  border:1px solid var(--border);
  background:white;
  border-radius:13px;
  padding:15px 10px;
  text-align:center;
  cursor:pointer;
  transition:.2s;
}

.quick:hover{
  transform:translateY(-2px);
  box-shadow:var(--shadow);
}

.quick div{font-size:20px}
.quick span{
  display:block;
  margin-top:8px;
  font-size:10px;
  font-weight:700;
}

/* MAP */

.map{
  height:430px;
  border-radius:18px;
  background:
    linear-gradient(90deg,rgba(23,105,170,.05) 1px,transparent 1px),
    linear-gradient(rgba(23,105,170,.05) 1px,transparent 1px),
    #EDF3F7;
  background-size:45px 45px;
  position:relative;
  overflow:hidden;
  border:1px solid var(--border);
}

.road{
  position:absolute;
  height:5px;
  background:#D2DCE5;
  transform:rotate(-23deg);
  width:120%;
  left:-10%;
}

.road.r2{
  transform:rotate(25deg);
  top:55%;
}

.road.r3{
  transform:rotate(70deg);
  top:30%;
}

.zone{
  position:absolute;
  width:185px;
  height:150px;
  background:rgba(242,153,74,.38);
  border:2px solid var(--orange);
  border-radius:50% 55% 45% 60%;
  left:39%;
  top:35%;
  transition:.8s;
}

.zone.yellow{
  background:rgba(242,201,76,.35);
  border-color:var(--yellow);
}

.map-marker{
  position:absolute;
  width:33px;
  height:33px;
  background:white;
  border-radius:50%;
  box-shadow:0 4px 15px rgba(0,0,0,.14);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:15px;
}

.marker-user{left:52%;top:50%}
.marker-hospital{left:63%;top:35%}
.marker-shelter{left:30%;top:62%}
.marker-fire{left:68%;top:68%}

.map-label{
  position:absolute;
  left:20px;
  top:18px;
  background:white;
  padding:9px 12px;
  border-radius:10px;
  font-size:10px;
  font-weight:700;
  box-shadow:var(--shadow);
}

.legend{
  position:absolute;
  right:18px;
  bottom:18px;
  background:white;
  padding:12px;
  border-radius:12px;
  box-shadow:var(--shadow);
}

.legend-row{
  display:flex;
  align-items:center;
  gap:7px;
  font-size:9px;
  margin:5px 0;
}

.legend-dot{
  width:10px;
  height:10px;
  border-radius:50%;
}

/* TABLE */

.table-wrap{
  overflow:auto;
}

table{
  width:100%;
  border-collapse:collapse;
  font-size:11px;
}

th{
  text-align:left;
  padding:12px;
  background:#F8FAFC;
  color:var(--muted);
  font-size:9px;
  text-transform:uppercase;
  letter-spacing:.5px;
}

td{
  padding:14px 12px;
  border-top:1px solid var(--border);
}

.badge{
  display:inline-flex;
  padding:5px 8px;
  border-radius:15px;
  font-size:9px;
  font-weight:800;
}

.badge-yellow{background:#FFF8DA;color:#8A6B00}
.badge-orange{background:#FFF0E3;color:#B85C10}
.badge-green{background:#E8F7EF;color:#147A49}
.badge-blue{background:#E9F3FB;color:#1769AA}
.badge-red{background:#FDECEC;color:#A92828}

/* AUTHORITY */

.map-panel{
  display:grid;
  grid-template-columns:1.5fr .8fr;
  gap:18px;
  margin-top:18px;
}

.side-list{
  max-height:430px;
  overflow:auto;
}

.list-item{
  padding:15px 18px;
  border-bottom:1px solid var(--border);
}

.list-item:last-child{border-bottom:0}

.list-item-top{
  display:flex;
  justify-content:space-between;
  gap:10px;
}

.list-item strong{font-size:11px}
.list-item p{
  color:var(--muted);
  font-size:10px;
  line-height:1.5;
  margin-top:5px;
}

.approval{
  padding:18px;
  border-left:4px solid var(--orange);
  background:#FFF9F3;
  border-radius:12px;
}

/* FACILITY */

.facility-hero{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:18px;
}

.readiness{
  padding:25px;
  background:linear-gradient(135deg,#0B1F33,#153E60);
  color:white;
  border-radius:20px;
}

.ready-circle{
  width:90px;
  height:90px;
  border-radius:50%;
  border:7px solid var(--green);
  display:flex;
  align-items:center;
  justify-content:center;
  margin:20px 0;
  font-weight:800;
  font-size:13px;
}

.resource{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px;
  border-bottom:1px solid var(--border);
}

.resource:last-child{border:0}

.resource-name{
  font-size:11px;
  font-weight:700;
}

.resource-value{
  font-size:16px;
  font-weight:800;
}

.trigger{
  padding:20px;
  border:1px solid #FFD6B1;
  background:#FFF9F4;
  border-radius:16px;
}

.trigger h3{
  font-size:13px;
  margin-bottom:8px;
}

.trigger p{
  color:var(--muted);
  font-size:10px;
  line-height:1.5;
}

.check{
  display:flex;
  gap:9px;
  padding:10px 0;
  font-size:11px;
}

.check:before{
  content:"✓";
  color:var(--green);
  font-weight:800;
}

/* SAFETY */

.guide{
  padding:22px;
}

.guide h3{
  font-size:15px;
  margin-bottom:14px;
}

.guide-section{
  margin-bottom:20px;
}

.guide-section h4{
  font-size:11px;
  color:var(--blue);
  margin-bottom:8px;
}

.guide-section li{
  list-style:none;
  font-size:11px;
  color:var(--muted);
  padding:6px 0;
}

.guide-section li:before{
  content:"•";
  color:var(--blue);
  font-weight:bold;
  margin-right:8px;
}

/* FORM */

.form-card{
  max-width:720px;
}

label{
  display:block;
  font-size:10px;
  font-weight:700;
  margin:15px 0 7px;
}

input,textarea,select{
  width:100%;
  border:1px solid var(--border);
  border-radius:10px;
  padding:11px;
  background:white;
  color:var(--text);
  outline:none;
  font-size:11px;
}

textarea{
  min-height:110px;
  resize:vertical;
}

input:focus,textarea:focus,select:focus{
  border-color:var(--blue);
}

.report-types{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:8px;
}

.report-type{
  padding:11px;
  border:1px solid var(--border);
  border-radius:10px;
  text-align:center;
  font-size:10px;
  font-weight:700;
  background:white;
}

.report-type.selected{
  border-color:var(--blue);
  background:#EAF4FD;
  color:var(--blue);
}

/* EMERGENCY */

.emergency{
  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.emergency-number{
  font-size:23px;
  font-weight:800;
}

.emergency small{
  display:block;
  color:var(--muted);
  font-size:10px;
  margin-top:4px;
}

/* MODAL */

.modal{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(11,31,51,.58);
  z-index:500;
  align-items:center;
  justify-content:center;
  padding:20px;
}

.modal.show{display:flex}

.modal-box{
  width:100%;
  max-width:500px;
  background:white;
  border-radius:20px;
  padding:25px;
  box-shadow:0 30px 80px rgba(0,0,0,.2);
}

.modal-box h2{
  font-size:18px;
}

.modal-box p{
  color:var(--muted);
  font-size:11px;
  line-height:1.6;
  margin:10px 0 18px;
}

/* TOAST */

.toast{
  position:fixed;
  right:25px;
  bottom:25px;
  background:#0B1F33;
  color:white;
  padding:14px 18px;
  border-radius:12px;
  box-shadow:0 12px 35px rgba(0,0,0,.2);
  font-size:11px;
  z-index:1000;
  transform:translateY(120px);
  transition:.3s;
}

.toast.show{transform:translateY(0)}

/* MOBILE */

.mobile-menu{
  display:none;
  border:0;
  background:white;
  font-size:22px;
}

@media(max-width:1050px){
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .home-layout,
  .facility-hero,
  .map-panel{grid-template-columns:1fr}
}

@media(max-width:760px){

  .sidebar{
    transform:translateX(-100%);
    transition:.25s;
  }

  .sidebar.open{
    transform:translateX(0);
  }

  .main{
    margin-left:0;
    width:100%;
  }

  .topbar{
    padding:0 16px;
    height:65px;
  }

  .mobile-menu{
    display:block;
    margin-right:10px;
  }

  .top-title h2{font-size:14px}

  .status{display:none}

  .content{
    padding:20px 14px 40px;
  }

  .section-head h1{
    font-size:21px;
  }

  .grid-4,
  .grid-3,
  .grid-2{
    grid-template-columns:1fr;
  }

  .quick-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .risk-card{
    min-height:390px;
  }

  .risk-desc{
    position:relative;
    right:auto;
    bottom:auto;
    width:100%;
    margin-top:28px;
  }

  .risk-number{
    font-size:52px;
  }

  .report-types{
    grid-template-columns:repeat(2,1fr);
  }

  .map{
    height:360px;
  }

  .top-actions .avatar{display:none}
}

/* PHONE CITIZEN MODE */

.phone-shell{
  max-width:460px;
  margin:auto;
}

.citizen-mobile-card{
  border-radius:28px;
  overflow:hidden;
}

.citizen-header{
  background:var(--navy);
  color:white;
  padding:23px 20px;
}

.citizen-header small{
  color:#91A9BF;
  font-size:10px;
}

.citizen-header h2{
  margin-top:6px;
  font-size:21px;
}

.mobile-risk{
  margin:15px;
  padding:20px;
  border-radius:20px;
  background:linear-gradient(135deg,#0B1F33,#174B72);
  color:white;
}

.mobile-risk-score{
  font-size:50px;
  font-weight:800;
  letter-spacing:-3px;
}

.mobile-content{
  padding:5px 15px 20px;
}

.mobile-bottom{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border-top:1px solid var(--border);
  background:white;
}

.mobile-bottom button{
  border:0;
  background:white;
  padding:12px 4px;
  font-size:9px;
  color:var(--muted);
}

.mobile-bottom button.active{
  color:var(--blue);
  font-weight:800;
}
</style>
</head>

<body>

<div class="app">

<!-- SIDEBAR -->

<aside class="sidebar" id="sidebar">

  <div class="logo">
    <div class="logo-icon">🛡️</div>
    <div class="logo-text">Safe<span>Setu</span></div>
  </div>

  <div class="nav-title">Citizen</div>

  <button class="nav-btn active" onclick="showView('citizen')">
    <span class="nav-icon">⌂</span> Home
  </button>

  <button class="nav-btn" onclick="showView('map')">
    <span class="nav-icon">◉</span> Live Risk Map
  </button>

  <button class="nav-btn" onclick="showView('alerts')">
    <span class="nav-icon">🔔</span> Alerts
  </button>

  <button class="nav-btn" onclick="showView('safety')">
    <span class="nav-icon">✚</span> Safety Guide
  </button>

  <button class="nav-btn" onclick="showView('nearby')">
    <span class="nav-icon">⌖</span> Nearby Help
  </button>

  <button class="nav-btn" onclick="showView('report')">
    <span class="nav-icon">▣</span> Report Incident
  </button>

  <button class="nav-btn" onclick="showView('emergency')">
    <span class="nav-icon">☎</span> Emergency Contacts
  </button>

  <div class="nav-title" style="margin-top:18px">Operations</div>

  <button class="nav-btn" onclick="showView('authority')">
    <span class="nav-icon">▦</span> Authority Dashboard
  </button>

  <button class="nav-btn" onclick="showView('facility')">
    <span class="nav-icon">🏥</span> Facility Dashboard
  </button>

  <div class="demo-box">
    <strong>● DEMO MODE</strong>
    <small>All rainfall, risk, alerts, facilities and citizen reports are simulated prototype data.</small>
  </div>

</aside>


<!-- MAIN -->

<main class="main">

<header class="topbar">

  <div style="display:flex;align-items:center">
    <button class="mobile-menu" onclick="toggleSidebar()">☰</button>

    <div class="top-title">
      <h2 id="topTitle">Citizen Safety Overview</h2>
      <p>Ward 12 • Bengaluru • DEMO DATA</p>
    </div>
  </div>

  <div class="top-actions">
    <div class="status">● Systems Operational</div>
    <div class="avatar">AV</div>
  </div>

</header>


<div class="content">


<!-- ======================================================
     CITIZEN HOME
====================================================== -->

<section id="citizen" class="view active">

  <div class="section-head">
    <div>
      <h1>Good evening, Arjun</h1>
      <p>Your hyperlocal safety overview</p>
    </div>

    <span class="page-tag">DEMO DATA</span>
  </div>


  <div class="home-layout">

    <div>

      <div class="risk-card">

        <div class="risk-top">

          <div>
            <div class="eyebrow">CURRENT AREA RISK</div>
            <div class="location">📍 Ward 12, Bengaluru</div>
          </div>

          <div class="badge badge-orange" id="citizenRiskBadge">
            HIGH ALERT
          </div>

        </div>

        <div class="risk-score">
          <div class="risk-number" id="citizenScore">72</div>
          <div class="risk-denom">/ 100</div>
        </div>

        <div class="risk-tier" id="citizenTier">HIGH ALERT</div>

        <div class="risk-desc" id="citizenRiskDesc">
          Flood risk is elevated due to heavy rainfall,
          historical flood exposure and reduced drainage capacity.
          Follow official instructions and avoid low-lying roads.
        </div>

      </div>


      <div class="quick-grid">

        <div class="quick" onclick="showView('safety')">
          <div>📘</div>
          <span>Safety Guide</span>
        </div>

        <div class="quick" onclick="showView('nearby')">
          <div>🏥</div>
          <span>Find Shelter</span>
        </div>

        <div class="quick" onclick="showView('report')">
          <div>💧</div>
          <span>Report Incident</span>
        </div>

        <div class="quick" onclick="showView('emergency')">
          <div>☎️</div>
          <span>Emergency</span>
        </div>

      </div>

    </div>


    <div class="home-right">

      <div class="card alert-card">

        <div class="alert-title">
          <span class="alert-dot"></span>
          <h3>Flood preparedness alert</h3>
        </div>

        <p>
          Heavy rainfall and water accumulation have increased
          flood risk in low-lying areas of Ward 12.
        </p>

        <div class="alert-meta">
          Source: Official weather feed + local monitoring + SafeSetu analysis
        </div>

        <br>

        <button class="btn btn-primary" onclick="showView('alerts')">
          View Alert →
        </button>

      </div>


      <div class="card facility">

        <div class="facility-title">
          NEAREST PREPARED FACILITY
        </div>

        <div class="facility-name">
          Government Primary Health Centre
        </div>

        <div class="facility-info">
          <span>📍 1.8 km away</span>
          <span style="color:var(--green);font-weight:800">
            ● READY
          </span>
        </div>

        <div style="margin-top:13px">
          <span class="badge badge-green">12 beds available</span>
        </div>

      </div>

    </div>

  </div>


  <div class="card card-pad" style="margin-top:18px">

    <div class="section-head" style="margin-bottom:8px">
      <div>
        <h3 style="font-size:14px">Why is my risk score 72?</h3>
        <p>Transparent SafeSetu risk explanation</p>
      </div>
    </div>

    <div class="grid grid-2">

      <div>

        <div class="factor">
          <div class="factor-head">
            <span>Live Hazard <b style="color:var(--blue)">40%</b></span>
            <span id="liveHazardValue">82</span>
          </div>
          <div class="progress">
            <i id="liveBar" style="width:82%;background:var(--blue)"></i>
          </div>
        </div>

        <div class="factor">
          <div class="factor-head">
            <span>Historical Vulnerability <b>25%</b></span>
            <span>70</span>
          </div>
          <div class="progress">
            <i style="width:70%;background:var(--orange)"></i>
          </div>
        </div>

      </div>

      <div>

        <div class="factor">
          <div class="factor-head">
            <span>Population Vulnerability <b>20%</b></span>
            <span>65</span>
          </div>
          <div class="progress">
            <i style="width:65%;background:var(--yellow)"></i>
          </div>
        </div>

        <div class="factor">
          <div class="factor-head">
            <span>Facility Proximity <b>15%</b></span>
            <span>55</span>
          </div>
          <div class="progress">
            <i style="width:55%;background:var(--green)"></i>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>



<!-- ======================================================
     RISK MAP
====================================================== -->

<section id="map" class="view">

  <div class="section-head">
    <div>
      <h1>Live Risk Map</h1>
      <p>Ward-level hazard and preparedness visualization</p>
    </div>

    <span class="page-tag">SIMULATED MAP</span>
  </div>


  <div class="map-panel">

    <div class="card" style="padding:10px">

      <div class="map">

        <div class="road" style="top:25%"></div>
        <div class="road r2"></div>
        <div class="road r3"></div>

        <div class="zone" id="mapZone"></div>

        <div class="map-label">
          WARD 12 • RISK <span id="mapRiskLabel">72</span>
        </div>

        <div class="map-marker marker-user">📍</div>
        <div class="map-marker marker-hospital">🏥</div>
        <div class="map-marker marker-shelter">🏠</div>
        <div class="map-marker marker-fire">🚒</div>

        <div class="legend">

          <div class="legend-row">
            <span class="legend-dot" style="background:#21A366"></span>
            Low
          </div>

          <div class="legend-row">
            <span class="legend-dot" style="background:#4D9DE0"></span>
            Monitor
          </div>

          <div class="legend-row">
            <span class="legend-dot" style="background:#F2C94C"></span>
            Prepare
          </div>

          <div class="legend-row">
            <span class="legend-dot" style="background:#F2994A"></span>
            High Alert
          </div>

          <div class="legend-row">
            <span class="legend-dot" style="background:#D64545"></span>
            Act Now
          </div>

        </div>

      </div>

    </div>


    <div class="card">

      <div class="card-pad">

        <div class="eyebrow" style="color:var(--muted)">
          SELECTED WARD
        </div>

        <h2 style="font-size:18px;margin-top:7px">
          Ward 12
        </h2>

        <p style="font-size:10px;color:var(--muted);margin-top:4px">
          Bengaluru • DEMO DATA
        </p>

        <div style="margin:25px 0">

          <div style="font-size:40px;font-weight:800">
            <span id="mapScore">72</span>
            <span style="font-size:12px;color:var(--muted)">/100</span>
          </div>

          <span class="badge badge-orange" id="mapTier">
            HIGH ALERT
          </span>

        </div>

        <h4 style="font-size:11px;margin-bottom:10px">
          Main factors
        </h4>

        <div class="check">Heavy rainfall detected</div>
        <div class="check">Historically flood-prone</div>
        <div class="check">High population density</div>
        <div class="check">Drainage capacity reduced</div>

        <div style="margin-top:15px;padding:13px;background:#FFF8EF;border-radius:11px">
          <strong style="font-size:10px">Recommended action</strong>
          <p style="font-size:10px;color:var(--muted);line-height:1.5;margin-top:5px">
            Residents in low-lying streets should avoid
            underpasses and prepare essential supplies.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>



<!-- ======================================================
     ALERTS
====================================================== -->

<section id="alerts" class="view">

  <div class="section-head">
    <div>
      <h1>Alerts</h1>
      <p>Location-specific preparedness notifications</p>
    </div>
    <span class="page-tag">DEMO ALERT</span>
  </div>


  <div class="card card-pad">

    <div style="display:flex;gap:14px">

      <div style="
        width:48px;height:48px;background:#FFF0E3;
        border-radius:14px;display:flex;
        align-items:center;justify-content:center;
        font-size:22px;flex-shrink:0">
        🌧️
      </div>

      <div style="flex:1">

        <div style="display:flex;justify-content:space-between;gap:10px">

          <div>
            <span class="badge badge-orange">HIGH ALERT</span>
            <h2 style="font-size:18px;margin-top:9px">
              Elevated Flood Risk
            </h2>
          </div>

          <small style="color:var(--muted);font-size:9px">
            8 min ago
          </small>

        </div>

        <p style="
          font-size:11px;
          color:var(--muted);
          line-height:1.6;
          margin:12px 0">
          Heavy rainfall and water accumulation have increased
          flood risk in low-lying areas of Ward 12.
        </p>

        <h4 style="font-size:11px;margin-bottom:8px">
          What you should do
        </h4>

        <div class="check">Avoid underpasses and flooded roads</div>
        <div class="check">Keep phones and power banks charged</div>
        <div class="check">Move important items to higher locations</div>
        <div class="check">Follow official evacuation instructions</div>
        <div class="check">Check on elderly and vulnerable residents</div>

        <div style="
          margin-top:15px;
          padding:12px;
          background:#F7F9FB;
          border-radius:10px;
          font-size:10px;
          color:var(--muted)">
          <strong>Source:</strong> IMD + local monitoring + SafeSetu analysis
          <br>
          <strong>Confidence:</strong> High
        </div>

        <div class="btn-row" style="margin-top:15px">
          <button class="btn btn-primary" onclick="showView('map')">
            View Safe Routes
          </button>

          <button class="btn btn-outline" onclick="showView('nearby')">
            Find Shelter
          </button>

          <button class="btn btn-green" onclick="toast('Alert marked as read')">
            ✓ Mark as Read
          </button>
        </div>

      </div>

    </div>

  </div>

</section>



<!-- ======================================================
     SAFETY
====================================================== -->

<section id="safety" class="view">

  <div class="section-head">
    <div>
      <h1>Flood Safety Guide</h1>
      <p>Simple actions before, during and after flooding</p>
    </div>

    <span class="page-tag">PREPAREDNESS</span>
  </div>


  <div class="grid grid-3">

    <div class="card guide">

      <h3>Before a Flood</h3>

      <div class="guide-section">

        <h4>PREPARE</h4>

        <ul>
          <li>Keep emergency documents in a waterproof pouch</li>
          <li>Store drinking water and essential medicines</li>
          <li>Charge mobile phones and power banks</li>
          <li>Move electrical appliances to higher locations</li>
          <li>Identify the nearest shelter</li>
        </ul>

      </div>

    </div>


    <div class="card guide">

      <h3>During a Flood</h3>

      <div class="guide-section">

        <h4>STAY SAFE</h4>

        <ul>
          <li>Do not walk or drive through moving water</li>
          <li>Avoid electrical poles and fallen wires</li>
          <li>Follow instructions from authorities</li>
          <li>Move to higher ground when instructed</li>
          <li>Do not spread unverified information</li>
        </ul>

      </div>

    </div>


    <div class="card guide">

      <h3>After a Flood</h3>

      <div class="guide-section">

        <h4>RECOVER SAFELY</h4>

        <ul>
          <li>Avoid contaminated water</li>
          <li>Do not touch damaged electrical equipment</li>
          <li>Report blocked roads and emergencies</li>
          <li>Wait for official clearance before returning</li>
        </ul>

      </div>

    </div>

  </div>


  <div class="card card-pad" style="margin-top:18px">

    <strong style="font-size:11px">
      Available languages
    </strong>

    <div class="btn-row" style="margin-top:12px">
      <button class="btn btn-primary">English</button>
      <button class="btn btn-outline">हिन्दी</button>
      <button class="btn btn-outline">ಕನ್ನಡ</button>
      <button class="btn btn-outline">தமிழ்</button>
      <button class="btn btn-outline">తెలుగు</button>
      <button class="btn btn-outline">मराठी</button>
    </div>

  </div>

</section>



<!-- ======================================================
     NEARBY
====================================================== -->

<section id="nearby" class="view">

  <div class="section-head">
    <div>
      <h1>Nearby Help</h1>
      <p>Prepared government facilities around Ward 12</p>
    </div>

    <span class="page-tag">DEMO LOCATIONS</span>
  </div>


  <div class="grid grid-2">

    <div class="card facility">

      <span class="badge badge-green">READY</span>

      <div class="facility-name">
        Government Primary Health Centre
      </div>

      <div class="facility-info">
        <span>📍 1.8 km</span>
        <span>🚑 Ambulance access</span>
      </div>

      <div style="margin-top:17px">

        <div class="factor-head">
          <span>Available beds</span>
          <b>12</b>
        </div>

        <div class="progress">
          <i style="width:65%;background:var(--green)"></i>
        </div>

      </div>

      <div style="margin-top:15px" class="btn-row">
        <button class="btn btn-primary" onclick="toast('Demo navigation opened')">
          Directions
        </button>
        <button class="btn btn-outline">Details</button>
      </div>

    </div>


    <div class="card facility">

      <span class="badge badge-green">READY</span>

      <div class="facility-name">
        Ward 12 Community Shelter
      </div>

      <div class="facility-info">
        <span>📍 2.4 km</span>
        <span>🏠 180 capacity</span>
      </div>

      <div style="margin-top:17px">

        <div class="factor-head">
          <span>Available capacity</span>
          <b>68%</b>
        </div>

        <div class="progress">
          <i style="width:68%;background:var(--green)"></i>
        </div>

      </div>

      <div style="margin-top:15px" class="btn-row">
        <button class="btn btn-primary" onclick="toast('Demo navigation opened')">
          Directions
        </button>
        <button class="btn btn-outline">Details</button>
      </div>

    </div>


    <div class="card facility">

      <span class="badge badge-blue">MONITORING</span>

      <div class="facility-name">
        Ward Fire & Rescue Station
      </div>

      <div class="facility-info">
        <span>📍 3.1 km</span>
        <span>🚒 2 vehicles</span>
      </div>

    </div>


    <div class="card facility">

      <span class="badge badge-green">READY</span>

      <div class="facility-name">
        Urban Community Shelter B
      </div>

      <div class="facility-info">
        <span>📍 3.7 km</span>
        <span>🏠 240 capacity</span>
      </div>

    </div>

  </div>

</section>



<!-- ======================================================
     REPORT
====================================================== -->

<section id="report" class="view">

  <div class="section-head">
    <div>
      <h1>Report an Incident</h1>
      <p>Help authorities understand what's happening locally</p>
    </div>

    <span class="page-tag">CITIZEN REPORT</span>
  </div>


  <div class="card card-pad form-card">

    <div style="
      padding:12px;
      background:#EEF6FC;
      border-radius:10px;
      font-size:10px;
      color:#35617F">
      📍 Location automatically detected:
      <strong>Ward 12, Bengaluru</strong>
    </div>

    <label>What did you observe?</label>

    <div class="report-types">

      <div class="report-type selected" onclick="selectReport(this)">
        💧 Waterlogging
      </div>

      <div class="report-type" onclick="selectReport(this)">
        🚧 Road Blockage
      </div>

      <div class="report-type" onclick="selectReport(this)">
        🔥 Fire
      </div>

      <div class="report-type" onclick="selectReport(this)">
        🌳 Fallen Tree
      </div>

      <div class="report-type" onclick="selectReport(this)">
        🏢 Building Damage
      </div>

      <div class="report-type" onclick="selectReport(this)">
        🏥 Medical Emergency
      </div>

    </div>


    <label>Description</label>

    <textarea id="reportText"
      placeholder="Describe what you observed..."></textarea>


    <label>Photo or video</label>

    <input type="file" accept="image/*,video/*">


    <div class="btn-row" style="margin-top:18px">

      <button class="btn btn-primary" onclick="submitReport()">
        Submit Report
      </button>

      <button class="btn btn-outline">
        Use Current Location
      </button>

    </div>


    <p style="
      color:var(--muted);
      font-size:9px;
      margin-top:15px;
      line-height:1.5">
      Citizen reports are reviewed before being used for
      official response decisions.
    </p>

  </div>

</section>



<!-- ======================================================
     EMERGENCY
====================================================== -->

<section id="emergency" class="view">

  <div class="section-head">
    <div>
      <h1>Emergency Contacts</h1>
      <p>Keep important numbers accessible</p>
    </div>
  </div>


  <div class="grid grid-2">

    <div class="card emergency">
      <div>
        <strong>National Emergency</strong>
        <small>Police • Fire • Medical</small>
      </div>
      <div class="emergency-number">112</div>
    </div>

    <div class="card emergency">
      <div>
        <strong>Fire & Rescue</strong>
        <small>Emergency fire response</small>
      </div>
      <div class="emergency-number">101</div>
    </div>

    <div class="card emergency">
      <div>
        <strong>Ambulance</strong>
        <small>Medical emergency</small>
      </div>
      <div class="emergency-number">108</div>
    </div>

    <div class="card emergency">
      <div>
        <strong>Police</strong>
        <small>Police emergency response</small>
      </div>
      <div class="emergency-number">100</div>
    </div>

  </div>

</section>



<!-- ======================================================
     AUTHORITY DASHBOARD
====================================================== -->

<section id="authority" class="view">

  <div class="section-head">

    <div>
      <h1>District Authority Dashboard</h1>
      <p>Ward 12 disaster coordination • Bengaluru</p>
    </div>

    <span class="page-tag">DEMO CONTROL ROOM</span>

  </div>


  <div class="grid grid-4">

    <div class="card metric">

      <div class="metric-icon">🔔</div>

      <div class="metric-label">
        ACTIVE ALERTS
      </div>

      <div class="metric-value">06</div>

      <div class="metric-foot">
        +2 in last hour
      </div>

    </div>


    <div class="card metric">

      <div class="metric-icon">⚠️</div>

      <div class="metric-label">
        HIGH-RISK WARDS
      </div>

      <div class="metric-value" id="authorityRiskWards">
        03
      </div>

      <div class="metric-foot">
        Ward 12 escalated
      </div>

    </div>


    <div class="card metric">

      <div class="metric-icon">🏥</div>

      <div class="metric-label">
        FACILITIES TRIGGERED
      </div>

      <div class="metric-value" id="facilityTriggered">
        08
      </div>

      <div class="metric-foot">
        Readiness responses pending
      </div>

    </div>


    <div class="card metric">

      <div class="metric-icon">💬</div>

      <div class="metric-label">
        OPEN CITIZEN REPORTS
      </div>

      <div class="metric-value" id="citizenReports">
        27
      </div>

      <div class="metric-foot">
        4 new reports
      </div>

    </div>

  </div>


  <div class="map-panel">

    <div class="card" style="padding:10px">

      <div class="map">

        <div class="road" style="top:25%"></div>
        <div class="road r2"></div>
        <div class="road r3"></div>

        <div class="zone" id="authorityZone"></div>

        <div class="map-label">
          LIVE WARD RISK • DEMO DATA
        </div>

        <div class="map-marker" style="left:22%;top:30%">🟢</div>
        <div class="map-marker" style="left:43%;top:43%">🟡</div>
        <div class="map-marker" style="left:52%;top:52%">🟠</div>
        <div class="map-marker" style="left:72%;top:32%">🟢</div>
        <div class="map-marker" style="left:75%;top:70%">🟡</div>
        <div class="map-marker" style="left:30%;top:70%">🔵</div>

      </div>

    </div>


    <div class="card">

      <div class="card-pad">

        <div class="eyebrow" style="color:var(--muted)">
          ALERT APPROVAL
        </div>

        <h2 style="font-size:17px;margin-top:8px">
          Flood Risk — Ward 12
        </h2>

        <div style="margin:14px 0">

          <span class="badge badge-orange">
            Risk Score: <span id="authorityScore">72</span>
          </span>

          <span class="badge badge-yellow">
            Awaiting Approval
          </span>

        </div>

        <div class="approval">

          <strong style="font-size:11px">
            Approval Request
          </strong>

          <p style="font-size:10px;color:var(--muted);line-height:1.5;margin-top:6px">
            A hyperlocal flood preparedness alert is ready
            for Ward 12 citizens.
          </p>

          <div style="margin-top:10px;font-size:10px">
            Affected population:
            <strong>18,400</strong>
          </div>

          <div style="margin-top:5px;font-size:10px">
            Nearby facilities:
            <strong>4</strong>
          </div>

        </div>


        <div class="btn-row" style="margin-top:15px">

          <button class="btn btn-green" onclick="approveAlert()">
            ✓ Approve
          </button>

          <button class="btn btn-orange" onclick="escalateAlert()">
            Escalate
          </button>

          <button class="btn btn-outline">
            Review
          </button>

        </div>

      </div>

    </div>

  </div>


  <div class="card" style="margin-top:18px">

    <div class="card-pad">

      <div class="section-head" style="margin-bottom:8px">

        <div>
          <h3 style="font-size:14px">
            Active Alerts
          </h3>
          <p>Current operational alerts</p>
        </div>

        <button class="btn btn-outline">
          Export
        </button>

      </div>


      <div class="table-wrap">

        <table>

          <thead>

            <tr>
              <th>Alert</th>
              <th>Ward</th>
              <th>Risk</th>
              <th>Population</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td><strong>Flood Risk</strong></td>
              <td>Ward 12</td>
              <td><span class="badge badge-orange">72</span></td>
              <td>18,400</td>
              <td><span class="badge badge-yellow" id="approvalStatus">Awaiting Approval</span></td>
              <td>
                <button class="btn btn-primary" onclick="approveAlert()">
                  Review
                </button>
              </td>
            </tr>

            <tr>
              <td><strong>Heavy Rainfall</strong></td>
              <td>Ward 9</td>
              <td><span class="badge badge-yellow">61</span></td>
              <td>12,100</td>
              <td><span class="badge badge-blue">Monitoring</span></td>
              <td>
                <button class="btn btn-outline">View</button>
              </td>
            </tr>

            <tr>
              <td><strong>Waterlogging</strong></td>
              <td>Ward 15</td>
              <td><span class="badge badge-yellow">54</span></td>
              <td>8,600</td>
              <td><span class="badge badge-blue">Monitoring</span></td>
              <td>
                <button class="btn btn-outline">View</button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</section>



<!-- ======================================================
     FACILITY DASHBOARD
====================================================== -->

<section id="facility" class="view">

  <div class="section-head">

    <div>
      <h1>Facility Readiness</h1>
      <p>Government Primary Health Centre • Ward 12</p>
    </div>

    <span class="page-tag">DEMO FACILITY</span>

  </div>


  <div class="facility-hero">

    <div class="readiness">

      <div class="eyebrow">
        FACILITY READINESS STATUS
      </div>

      <h2 style="font-size:23px;margin-top:7px">
        Government Primary Health Centre
      </h2>

      <div class="ready-circle" id="readyCircle">
        READY
      </div>

      <p style="
        color:#B9CBD9;
        font-size:11px;
        line-height:1.6">
        Facility has confirmed readiness for the
        current Ward 12 preparedness trigger.
      </p>

    </div>


    <div class="card">

      <div class="card-pad">

        <div class="eyebrow" style="color:var(--muted)">
          RESOURCES
        </div>

        <div class="resource">

          <div class="resource-name">
            Available Beds
          </div>

          <div class="resource-value">12</div>

        </div>

        <div class="resource">

          <div class="resource-name">
            Medical Staff
          </div>

          <div class="resource-value">18</div>

        </div>

        <div class="resource">

          <div class="resource-name">
            Vehicles
          </div>

          <div class="resource-value">2</div>

        </div>

        <div class="resource">

          <div class="resource-name">
            Supply Kits
          </div>

          <div class="resource-value">46</div>

        </div>

      </div>

    </div>

  </div>


  <div style="margin-top:18px" class="grid grid-2">

    <div class="trigger">

      <span class="badge badge-orange">
        READINESS TRIGGER
      </span>

      <h3 style="margin-top:12px">
        Flood — Ward 12 Low-Lying Cluster B
      </h3>

      <p>
        Risk level: <strong>78 / 100</strong>
        <br>
        Estimated affected population: <strong>8,200</strong>
      </p>

      <div style="margin-top:15px">

        <div class="check">
          Confirm emergency staff availability
        </div>

        <div class="check">
          Prepare 20 additional beds
        </div>

        <div class="check">
          Check first-aid supplies
        </div>

        <div class="check">
          Keep ambulance access clear
        </div>

        <div class="check">
          Report capacity within 30 minutes
        </div>

      </div>

      <div style="
        margin-top:15px;
        padding:11px;
        background:white;
        border-radius:10px;
        font-size:10px">
        Trigger status:
        <strong id="triggerStatus">Pending Facility Confirmation</strong>
      </div>

    </div>


    <div class="card card-pad">

      <h3 style="font-size:14px">
        Update Readiness
      </h3>

      <p style="
        font-size:10px;
        color:var(--muted);
        line-height:1.5;
        margin-top:5px">
        Confirm the facility's operational capacity.
      </p>

      <div class="btn-row" style="margin-top:20px">

        <button class="btn btn-green" onclick="facilityReady()">
          ✓ Ready
        </button>

        <button class="btn btn-orange" onclick="facilityPartial()">
          Partially Ready
        </button>

        <button class="btn btn-red" onclick="facilityExceeded()">
          Capacity Exceeded
        </button>

        <button class="btn btn-outline" onclick="facilityHelp()">
          Need Assistance
        </button>

      </div>

    </div>

  </div>

</section>



<!-- ======================================================
     DEMO CONTROL
====================================================== -->

<section id="demo" class="view">

  <div class="section-head">

    <div>
      <h1>SafeSetu Demo Control</h1>
      <p>Use this panel to demonstrate the complete disaster workflow.</p>
    </div>

    <span class="page-tag">SIMULATION</span>

  </div>


  <div class="card card-pad">

    <div style="
      padding:15px;
      background:#EEF6FC;
      border-radius:12px;
      margin-bottom:20px">

      <strong style="font-size:12px">
        🎬 Hackathon Demo Scenario
      </strong>

      <p style="
        font-size:10px;
        color:var(--muted);
        margin-top:6px;
        line-height:1.5">
        Increase simulated rainfall to demonstrate how SafeSetu
        moves from monitoring to coordinated preparedness.
      </p>

    </div>


    <div style="display:flex;justify-content:space-between">

      <strong style="font-size:11px">
        Simulated Rainfall
      </strong>

      <strong id="rainfallValue">
        42 mm
      </strong>

    </div>

    <input
      id="rainSlider"
      type="range"
      min="20"
      max="100"
      value="42"
      style="margin-top:14px"
      oninput="simulateRain(this.value)"
    >


    <div style="
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:12px;
      margin-top:25px">

      <div style="
        padding:15px;
        border:1px solid var(--border);
        border-radius:12px">

        <small style="font-size:9px;color:var(--muted)">
          RISK SCORE
        </small>

        <div style="font-size:27px;font-weight:800;margin-top:5px">
          <span id="demoScore">48</span>
        </div>

      </div>


      <div style="
        padding:15px;
        border:1px solid var(--border);
        border-radius:12px">

        <small style="font-size:9px;color:var(--muted)">
          WARD STATUS
        </small>

        <div style="font-size:14px;font-weight:800;margin-top:10px">
          <span id="demoWardStatus">PREPARE</span>
        </div>

      </div>


      <div style="
        padding:15px;
        border:1px solid var(--border);
        border-radius:12px">

        <small style="font-size:9px;color:var(--muted)">
          ALERT STATUS
        </small>

        <div style="font-size:14px;font-weight:800;margin-top:10px">
          <span id="demoAlertStatus">MONITORING</span>
        </div>

      </div>

    </div>


    <div class="btn-row" style="margin-top:22px">

      <button class="btn btn-primary" onclick="runFullDemo()">
        ▶ Run Full Demo
      </button>

      <button class="btn btn-outline" onclick="resetDemo()">
        Reset Demo
      </button>

    </div>

  </div>

</section>


</div>
</main>

</div>


<!-- MODAL -->

<div class="modal" id="modal">

  <div class="modal-box">

    <h2 id="modalTitle">
      Alert Approved
    </h2>

    <p id="modalText">
      The alert has been approved and is ready for broadcast.
    </p>

    <button class="btn btn-primary" onclick="closeModal()">
      Continue
    </button>

  </div>

</div>


<!-- TOAST -->

<div class="toast" id="toast">
  Action completed
</div>



<script>

/* =====================================================
   GLOBAL STATE
===================================================== */

let riskScore = 72;
let rainfall = 42;
let reportCount = 27;
let approved = false;
let facilityStatus = "READY";


/* =====================================================
   NAVIGATION
===================================================== */

const titles = {

  citizen:"Citizen Safety Overview",
  map:"Live Risk Map",
  alerts:"Citizen Alerts",
  safety:"Flood Safety Guide",
  nearby:"Nearby Help",
  report:"Incident Reporting",
  emergency:"Emergency Contacts",
  authority:"District Authority Dashboard",
  facility:"Facility Readiness Dashboard",
  demo:"SafeSetu Demo Control"

};


function showView(id){

  document.querySelectorAll(".view").forEach(v=>{
    v.classList.remove("active");
  });

  const view = document.getElementById(id);

  if(view){
    view.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach(btn=>{

    const text = btn.innerText.toLowerCase();

    if(
      (id==="citizen" && text.includes("home")) ||
      (id==="map" && text.includes("risk map")) ||
      (id==="alerts" && text.includes("alerts")) ||
      (id==="safety" && text.includes("safety")) ||
      (id==="nearby" && text.includes("nearby")) ||
      (id==="report" && text.includes("report")) ||
      (id==="emergency" && text.includes("emergency")) ||
      (id==="authority" && text.includes("authority")) ||
      (id==="facility" && text.includes("facility"))
    ){
      btn.classList.add("active");
    }

  });

  document.getElementById("topTitle").innerText =
    titles[id] || "SafeSetu";

  document.getElementById("sidebar").classList.remove("open");

  window.scrollTo({top:0,behavior:"smooth"});
}


function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("open");
}


/* =====================================================
   RISK UPDATE
===================================================== */

function updateRisk(score){

  riskScore = score;

  document.getElementById("citizenScore").innerText = score;
  document.getElementById("mapScore").innerText = score;
  document.getElementById("authorityScore").innerText = score;
  document.getElementById("demoScore").innerText = score;
  document.getElementById("mapRiskLabel").innerText = score;

  let tier = "";
  let color = "";

  if(score < 25){

    tier = "LOW";
    color = "green";

  }else if(score < 50){

    tier = "MONITOR";
    color = "blue";

  }else if(score < 70){

    tier = "PREPARE";
    color = "yellow";

  }else if(score < 85){

    tier = "HIGH ALERT";
    color = "orange";

  }else{

    tier = "ACT NOW";
    color = "red";

  }


  document.getElementById("citizenTier").innerText = tier;
  document.getElementById("mapTier").innerText = tier;

  const badge = document.getElementById("citizenRiskBadge");

  badge.className = "badge badge-" + color;
  badge.innerText = tier;

  const mapZone = document.getElementById("mapZone");
  const authorityZone = document.getElementById("authorityZone");

  if(score >= 70){

    mapZone.classList.remove("yellow");
    authorityZone.classList.remove("yellow");

  }else{

    mapZone.classList.add("yellow");
    authorityZone.classList.add("yellow");

  }

  if(score >= 70){

    document.getElementById("citizenRiskDesc").innerText =
      "Flood risk is elevated due to heavy rainfall, historical flood exposure and reduced drainage capacity. Follow official instructions and avoid low-lying roads.";

  }else{

    document.getElementById("citizenRiskDesc").innerText =
      "Rainfall conditions are being monitored. Stay informed and review your local safety instructions.";

  }

}


/* =====================================================
   RAINFALL SIMULATOR
===================================================== */

function simulateRain(value){

  rainfall = Number(value);

  document.getElementById("rainfallValue").innerText =
    rainfall + " mm";

  /*
    Demo mapping:
    42mm → 48
    80mm+ → 72
  */

  let score;

  if(rainfall <= 42){

    score = 48;

  }else{

    score = Math.round(
      48 + ((rainfall - 42) / 38) * 24
    );

  }

  score = Math.min(72,score);

  updateRisk(score);

  document.getElementById("liveHazardValue").innerText =
    Math.round(55 + ((rainfall-20)/80)*27);

  document.getElementById("liveBar").style.width =
    Math.round(55 + ((rainfall-20)/80)*27) + "%";


  if(score >= 70){

    document.getElementById("demoWardStatus").innerText =
      "HIGH ALERT";

    document.getElementById("demoAlertStatus").innerText =
      "APPROVAL REQUIRED";

  }else{

    document.getElementById("demoWardStatus").innerText =
      "PREPARE";

    document.getElementById("demoAlertStatus").innerText =
      "MONITORING";

  }

}


/* =====================================================
   FULL DEMO
===================================================== */

async function runFullDemo(){

  showView("demo");

  toast("Starting SafeSetu disaster simulation...");

  const slider = document.getElementById("rainSlider");

  slider.value = 42;
  simulateRain(42);

  await wait(800);

  for(let i=42;i<=80;i+=2){

    slider.value = i;
    simulateRain(i);

    await wait(60);

  }

  await wait(700);

  toast("Ward 12 escalated to HIGH ALERT");

  await wait(900);

  showView("authority");

  toast("Authority received approval request");

  await wait(1200);

  showView("facility");

  toast("Nearby facilities received readiness triggers");

  await wait(1200);

  showView("alerts");

  toast("Citizens received flood preparedness alert");

}


function wait(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}


/* =====================================================
   APPROVAL
===================================================== */

function approveAlert(){

  approved = true;

  document.getElementById("approvalStatus").innerText =
    "Approved";

  document.getElementById("approvalStatus").className =
    "badge badge-green";

  showModal(
    "Alert Approved ✓",
    "Ward 12 flood preparedness alert has been approved. Citizen notifications and facility readiness triggers are now activated in this prototype."
  );

  toast("Alert approved — readiness triggers activated");
}


function escalateAlert(){

  showModal(
    "Alert Escalated",
    "The Ward 12 alert has been escalated to the next authority level for review."
  );

  toast("Alert escalated");
}


/* =====================================================
   FACILITY
===================================================== */

function facilityReady(){

  facilityStatus = "READY";

  document.getElementById("triggerStatus").innerText =
    "Confirmed Ready";

  document.getElementById("readyCircle").innerText =
    "READY";

  document.getElementById("readyCircle").style.borderColor =
    "var(--green)";

  toast("Facility marked READY");
}


function facilityPartial(){

  facilityStatus = "PARTIALLY READY";

  document.getElementById("triggerStatus").innerText =
    "Partially Ready";

  document.getElementById("readyCircle").innerText =
    "PARTIAL";

  document.getElementById("readyCircle").style.borderColor =
    "var(--orange)";

  toast("Facility marked PARTIALLY READY");
}


function facilityExceeded(){

  facilityStatus = "CAPACITY EXCEEDED";

  document.getElementById("triggerStatus").innerText =
    "Capacity Exceeded";

  document.getElementById("readyCircle").innerText =
    "FULL";

  document.getElementById("readyCircle").style.borderColor =
    "var(--red)";

  toast("Capacity exceeded — authority notified");
}


function facilityHelp(){

  document.getElementById("triggerStatus").innerText =
    "Assistance Requested";

  document.getElementById("readyCircle").innerText =
    "HELP";

  document.getElementById("readyCircle").style.borderColor =
    "var(--orange)";

  toast("Assistance request sent to authority");
}


/* =====================================================
   INCIDENT REPORT
===================================================== */

function selectReport(element){

  document.querySelectorAll(".report-type").forEach(el=>{
    el.classList.remove("selected");
  });

  element.classList.add("selected");
}


function submitReport(){

  const text =
    document.getElementById("reportText").value.trim();

  reportCount++;

  document.getElementById("citizenReports").innerText =
    reportCount;

  document.getElementById("reportText").value = "";

  showModal(
    "Report Submitted ✓",
    "Your waterlogging report has been received. Citizen reports are reviewed before being used for official response decisions."
  );

}


/* =====================================================
   MODAL
===================================================== */

function showModal(title,text){

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;

  document.getElementById("modal").classList.add("show");

}


function closeModal(){
  document.getElementById("modal").classList.remove("show");
}


/* =====================================================
   TOAST
===================================================== */

function toast(message){

  const el = document.getElementById("toast");

  el.innerText = message;

  el.classList.add("show");

  setTimeout(()=>{
    el.classList.remove("show");
  },2800);

}


/* =====================================================
   RESET
===================================================== */

function resetDemo(){

  rainfall = 42;

  document.getElementById("rainSlider").value = 42;

  document.getElementById("rainfallValue").innerText =
    "42 mm";

  document.getElementById("demoWardStatus").innerText =
    "PREPARE";

  document.getElementById("demoAlertStatus").innerText =
    "MONITORING";

  updateRisk(48);

  toast("Demo reset to baseline: risk 48");

}


/* =====================================================
   INITIALIZATION
===================================================== */

updateRisk(48);

</script>

</body>
</html>
