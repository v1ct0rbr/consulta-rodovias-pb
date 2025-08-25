
 let DATA = [];

  async function main() {
    try {
      const res = await fetch('./trechos_residencias.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      DATA = await res.json();
      console.log(`Carregado ${DATA.length} registros de rodovias.`);

      // 👉 Coloque aqui todo o resto do seu código que usa DATA...
      // initApp(DATA);
    } catch (err) {
      console.error('Falha ao carregar rodovias.json:', err);
    }
  }

  main(); // Nada de console.log(DATA.length) aqui fora 🙂



const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
function uniq(arr) { return [...new Set(arr)].sort((a, b) => a.localeCompare(b, 'pt-BR')); }

async function main() {
  const DATA = await fetch('rodovias.json').then(r => r.json());
  console.log(`Carregado ${DATA.length} registros de rodovias.`);

  function buildLookups() {
    const citySet = new Set();
    DATA.forEach(r => (r.cities || []).forEach(c => citySet.add(c)));
    $('#cities').innerHTML = uniq([...citySet]).map(c => `<option value="${c}">`).join('');
    $('#rodovias').innerHTML = uniq(DATA.map(r => r.road)).map(r => `<option value="${r}">`).join('');
  }
  buildLookups();

  $('#searchCity').addEventListener('click', () => {
    const name = ($('#city').value || '').trim();
    if (!name) { alert('Informe o nome da cidade.'); return; }
    const rows = DATA.filter(r => (r.cities || []).some(c => c.toLowerCase() === name.toLowerCase()));
    $('#cityName').textContent = name;
    $('#cityTable').innerHTML = rows.map(r => `
      <tr>
        <td><span class="badge">${r.road}</span></td>
        <td>${r.trecho}</td>
        <td>${r.residence}</td>
      </tr>`).join('') || `<tr><td colspan="3">Nenhum resultado encontrado.</td></tr>`;
    $('#cityResults').classList.remove('hide');
  });
  $('#clearCity').addEventListener('click', () => {
    $('#city').value = ''; $('#cityResults').classList.add('hide');
  });
  let currentRoadRows = [];
  $('#searchRoad').addEventListener('click', () => {
    const road = ($('#rodovia').value || '').trim().toUpperCase();
    if (!road) { alert('Informe a rodovia (ex.: PB-008).'); return; }
    currentRoadRows = DATA.filter(r => r.road.toUpperCase() === road);
    $('#roadName').textContent = road;
    $('#roadTable').innerHTML = currentRoadRows.map((r, i) => `
      <tr data-index="${i}" class="trechoRow" style="cursor:pointer">
        <td>${i + 1}</td>
        <td>${r.trecho}</td>
        <td>${r.residence}</td>
        <td>${(r.ext_km ?? 0).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</td>
        <td>${r.sit_fis}</td>
      </tr>`).join('') || `<tr><td colspan="5">Nenhum trecho cadastrado para ${road}.</td></tr>`;
    $('#roadResults').classList.remove('hide');
    $('#trechoBox').classList.add('hide');
  });
  $('#clearRoad').addEventListener('click', () => {
    $('#rodovia').value = ''; $('#roadResults').classList.add('hide'); $('#trechoBox').classList.add('hide');
  });
  document.addEventListener('click', (ev) => {
    const tr = ev.target.closest('.trechoRow');
    if (!tr) return;
    const idx = +tr.dataset.index;
    const r = currentRoadRows[idx];
    const fields = [
      ["Rodovia", r.road],
      ["Trecho", r.trecho],
      ["Residência", r.residence],
      ["INÍCIO (Km)", fmt(r.start_km)],
      ["FIM (Km)", fmt(r.end_km)],
      ["EXT. (Km)", fmt(r.ext_km)],
      ["SIT. FÍS.", r.sit_fis || "—"],
      ["TIPO VER", r.tipo_ver || "—"],
      ["RODOVIA COINCID.", r.rod_coinc || "—"],
      ["CLASSIF. FUNCIONAL", r.classif_func || "—"],
      ["Cidades atendidas", (r.cities || []).join(", ") || "—"]
    ];
    $('#trechoDetails').innerHTML = fields.map(([k, v]) => `<tr><th style="width:220px">${k}</th><td>${v}</td></tr>`).join('');
    $('#trechoBox').classList.remove('hide');
  });
  function fmt(n) { return (n == null) ? "—" : Number(n).toLocaleString('pt-BR', { maximumFractionDigits: 2 }); }
}

main();
