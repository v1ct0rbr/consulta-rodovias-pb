// JS extraído de index.html
const DATA = [
  {road:"PB-041", residence:"Residência Rodoviária de Sapé", trecho:"Entr. BR-101 (Mamanguape) – Itapororoca (Centro)",cities:["Mamanguape","Itapororoca","Rio Tinto"], start_km:0.0, end_km:21.2, ext_km:21.2, sit_fis:"Pav. TSD",tipo_ver:"A.S.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-041", residence:"Residência Rodoviária de Sapé", trecho:"Trechos complementares até Renascença",cities:["Cuité de Mamanguape","Rio Tinto","Baía da Traição"], start_km:21.2, end_km:66.7, ext_km:45.5, sit_fis:"Pav. TSD / CA",tipo_ver:"A.S.", rod_coinc:"BR-101 (parcial)", classif_func:"—"},
  {road:"PB-008", residence:"Residência Rodoviária de Sapé", trecho:"Trechos litorâneos (Baía da Traição ↔ Barra de Camaratuba)",cities:["Baía da Traição","Marcação","Rio Tinto","Mamanguape"], start_km:86.1, end_km:152.9, ext_km:66.8,sit_fis:"Pav. / Leito / Plan.", tipo_ver:"—", rod_coinc:"BR-230 (porto); PB-061 (acessos)", classif_func:"—"},
  {road:"PB-073", residence:"Residência Rodoviária de Sapé", trecho:"Sapé – Guarabira (e complementos)",cities:["Sapé","Cruz do Espírito Santo","Mari","Guarabira","Pirpirituba"], start_km:0.0, end_km:73.8, ext_km:73.8,sit_fis:"Pav. CA/TSD", tipo_ver:"A.P.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-008", residence:"Residência Rodoviária de Itabaiana", trecho:"João Pessoa ↔ Conde ↔ Pitimbu",cities:["João Pessoa","Conde","Alhandra","Pitimbu"], start_km:0.0, end_km:60.4, ext_km:60.4, sit_fis:"Pav. TSD",tipo_ver:"A.S.", rod_coinc:"PB-044 (parcial)", classif_func:"—"},
  {road:"PB-044", residence:"Residência Rodoviária de Itabaiana", trecho:"Caaporã ↔ Alhandra ↔ Conde",cities:["Caaporã","Alhandra","Conde"], start_km:0.0, end_km:23.9, ext_km:23.9, sit_fis:"Pav. CA/TSD", tipo_ver:"C.P.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-066", residence:"Residência Rodoviária de Itabaiana", trecho:"Juripiranga ↔ Mogeiro ↔ Natuba",cities:["Juripiranga","Salgado de São Félix","Mogeiro","Natuba"], start_km:0.0, end_km:53.4, ext_km:53.4,sit_fis:"Pav. TSD/CA", tipo_ver:"BR-408 (coinc.)", rod_coinc:"BR-408", classif_func:"A.P."},
  {road:"PB-090", residence:"Residência Rodoviária de Itabaiana", trecho:"Aroeiras ↔ Itatuba (acessos a Ingá)",cities:["Aroeiras","Itatuba","Ingá"], start_km:0.0, end_km:37.3, ext_km:37.3, sit_fis:"Pav./Leito",tipo_ver:"C.P.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-087", residence:"Residência Rodoviária de Solânea", trecho:"Areia ↔ Pilões ↔ Borborema",cities:["Areia","Pilões","Borborema"], start_km:0.0, end_km:52.4, ext_km:52.4, sit_fis:"Pav./EOP",tipo_ver:"C.P.", rod_coinc:"PB-085 (parcial)", classif_func:"—"},
  {road:"PB-103", residence:"Residência Rodoviária de Solânea", trecho:"Bananeiras ↔ Bilinguim ↔ Tacima",cities:["Bananeiras","Belém","Bilinguim","Tacima"], start_km:0.0, end_km:35.4, ext_km:35.4, sit_fis:"Pav./EOP",tipo_ver:"C.S.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-105", residence:"Residência Rodoviária de Solânea", trecho:"Arara ↔ Remígio ↔ Belém",cities:["Arara","Remígio","Belém","Solânea"], start_km:0.0, end_km:50.3, ext_km:50.3, sit_fis:"Pav. TSD",tipo_ver:"A.S.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-148", residence:"Residência Rodoviária de Campina Grande", trecho:"Queimadas/Boqueirão ↔ Boa Vista ↔ Cabaceiras",cities:["Queimadas","Boqueirão","Boa Vista","Cabaceiras"], start_km:0.0, end_km:90.2, ext_km:90.2, sit_fis:"Pav./Leito",tipo_ver:"C.P.", rod_coinc:"BR-412 (parcial)", classif_func:"—"},
  {road:"PB-160", residence:"Residência Rodoviária de Campina Grande", trecho:"Barra de São Miguel ↔ Cabaceiras ↔ São Domingos do Cariri",cities:["Barra de São Miguel","Cabaceiras","São Domingos do Cariri"], start_km:0.0, end_km:70.7, ext_km:70.7,sit_fis:"Pav./EOP/Leito", tipo_ver:"C.S.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-102", residence:"Residência Rodoviária de Campina Grande", trecho:"Umbuzeiro ↔ Aroeiras ↔ Gado Bravo",cities:["Umbuzeiro","Aroeiras","Gado Bravo"], start_km:0.0, end_km:50.7, ext_km:50.7, sit_fis:"Pav. TSD",tipo_ver:"A.S.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-196", residence:"Residência Rodoviária de Sumé", trecho:"Barra de São Miguel ↔ Riacho de Sto. Antônio ↔ Alcantil ↔ Sta. Cecília → (Congo/Camalaú/Monteiro)",cities:["Barra de São Miguel","Riacho de Santo Antônio","Alcantil","Santa Cecília","Congo","Camalaú","Monteiro"], start_km:32.3, end_km:162.9, ext_km:130.6,sit_fis:"Leito/Pav./Impl.", tipo_ver:"C.S.", rod_coinc:"PB-214 (entronc.)", classif_func:"—"},
  {road:"PB-214", residence:"Residência Rodoviária de Sumé", trecho:"Congo ↔ Camalaú ↔ Sumé",cities:["Congo","Camalaú","Sumé"], start_km:0.0, end_km:48.7, ext_km:48.7, sit_fis:"Pav. TSD",tipo_ver:"C.S.", rod_coinc:"PB-196 (coinc. parcial)", classif_func:"—"},
  {road:"PB-248", residence:"Residência Rodoviária de Sumé", trecho:"Serra Branca ↔ Ouro Velho ↔ Zabelê / Monteiro",cities:["Serra Branca","Ouro Velho","Zabelê","Monteiro"], start_km:0.0, end_km:35.1, ext_km:35.1,sit_fis:"Pav./Leito", tipo_ver:"C.S.", rod_coinc:"—", classif_func:"—"},
  {road:"PB-238", residence:"Residência Rodoviária de Patos", trecho:"Assunção ↔ Taperoá ↔ Desterro",cities:["Assunção","Taperoá","Desterro"], start_km:0.0, end_km:73.0, ext_km:73.0, sit_fis:"Pav. TSD",tipo_ver:"A.S.", rod_coinc:"—", classif_func:"—"},
];

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
function uniq(arr){ return [...new Set(arr)].sort((a,b)=>a.localeCompare(b,'pt-BR')); }
function buildLookups(){
  const citySet = new Set();
  DATA.forEach(r => (r.cities||[]).forEach(c => citySet.add(c)));
  $('#cities').innerHTML = uniq([...citySet]).map(c=>`<option value="${c}">`).join('');
  $('#rodovias').innerHTML = uniq(DATA.map(r=>r.road)).map(r=>`<option value="${r}">`).join('');
}
buildLookups();
$('#searchCity').addEventListener('click', ()=>{
  const name = ($('#city').value||'').trim();
  if(!name){ alert('Informe o nome da cidade.'); return; }
  const rows = DATA.filter(r => (r.cities||[]).some(c => c.toLowerCase()===name.toLowerCase()));
  $('#cityName').textContent = name;
  $('#cityTable').innerHTML = rows.map(r=>`
    <tr>
      <td><span class="badge">${r.road}</span></td>
      <td>${r.trecho}</td>
      <td>${r.residence}</td>
    </tr>`).join('') || `<tr><td colspan="3">Nenhum resultado encontrado.</td></tr>`;
  $('#cityResults').classList.remove('hide');
});
$('#clearCity').addEventListener('click', ()=>{
  $('#city').value=''; $('#cityResults').classList.add('hide');
});
let currentRoadRows = [];
$('#searchRoad').addEventListener('click', ()=>{
  const road = ($('#rodovia').value||'').trim().toUpperCase();
  if(!road){ alert('Informe a rodovia (ex.: PB-008).'); return; }
  currentRoadRows = DATA.filter(r=>r.road.toUpperCase()===road);
  $('#roadName').textContent = road;
  $('#roadTable').innerHTML = currentRoadRows.map((r,i)=>`
    <tr data-index="${i}" class="trechoRow" style="cursor:pointer">
      <td>${i+1}</td>
      <td>${r.trecho}</td>
      <td>${r.residence}</td>
      <td>${(r.ext_km??0).toLocaleString('pt-BR',{maximumFractionDigits:2})}</td>
      <td>${r.sit_fis}</td>
    </tr>`).join('') || `<tr><td colspan="5">Nenhum trecho cadastrado para ${road}.</td></tr>`;
  $('#roadResults').classList.remove('hide');
  $('#trechoBox').classList.add('hide');
});
$('#clearRoad').addEventListener('click', ()=>{
  $('#rodovia').value=''; $('#roadResults').classList.add('hide'); $('#trechoBox').classList.add('hide');
});
document.addEventListener('click', (ev)=>{
  const tr = ev.target.closest('.trechoRow');
  if(!tr) return;
  const idx = +tr.dataset.index;
  const r = currentRoadRows[idx];
  const fields = [
    ["Rodovia", r.road],
    ["Trecho", r.trecho],
    ["Residência", r.residence],
    ["INÍCIO (Km)", fmt(r.start_km)],
    ["FIM (Km)", fmt(r.end_km)],
    ["EXT. (Km)", fmt(r.ext_km)],
    ["SIT. FÍS.", r.sit_fis||"—"],
    ["TIPO VER", r.tipo_ver||"—"],
    ["RODOVIA COINCID.", r.rod_coinc||"—"],
    ["CLASSIF. FUNCIONAL", r.classif_func||"—"],
    ["Cidades atendidas", (r.cities||[]).join(", ")||"—"]
  ];
  $('#trechoDetails').innerHTML = fields.map(([k,v])=>`<tr><th style="width:220px">${k}</th><td>${v}</td></tr>`).join('');
  $('#trechoBox').classList.remove('hide');
});
function fmt(n){ return (n==null) ? "—" : Number(n).toLocaleString('pt-BR',{maximumFractionDigits:2}); }
