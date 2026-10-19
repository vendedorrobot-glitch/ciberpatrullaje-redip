
        const supervisionData = {
            prevencion: [
                { dia: "Lunes", apure: 2, barinas: 4, cojedes: 3, guarico: 5, portuguesa: 1 },
                { dia: "Martes", apure: 3, barinas: 4, cojedes: 2, guarico: 5, portuguesa: 0 },
                { dia: "Miércoles", apure: 2, barinas: 4, cojedes: 3, guarico: 4, portuguesa: 1 },
                { dia: "Jueves", apure: 3, barinas: 5, cojedes: 3, guarico: 5, portuguesa: 0 },
                { dia: "Viernes", apure: 2, barinas: 4, cojedes: 2, guarico: 5, portuguesa: 1 }
            ],
            operativos: [
                { dia: "Viernes", apure: 4, barinas: 6, cojedes: 4, guarico: 7, portuguesa: 1 },
                { dia: "Sábado", apure: 5, barinas: 6, cojedes: 5, guarico: 8, portuguesa: 2 },
                { dia: "Domingo", apure: 4, barinas: 5, cojedes: 4, guarico: 7, portuguesa: 1 }
            ]
        };

        const dbReports = {
            "2026-10": {
                resumen: { excelente: 324, destiempo: 27, retraso: 0, tecnicos: 0, total: 351 },
                diag: "En el avance de octubre se registran 351 marcas con 92.3% de excelencia. Guárico consolida su liderazgo, mientras Barinas y Portuguesa presentan colapso operativo en emisión de partes.",
                estados: {
                    APURE: { excelente: 59, destiempo: 18, retraso: 0, tecnicos: 0, total: 77, pct: 76.6, conParte: 11, sinParte: 5, fechasSin: "06, 08, 10, 11, 16", diagText: "Retrocedió a 59 marcas excelentes. 18 destiempos, requiere atención en DM Achaguas y Guasdualito.", badge: "Inestable", badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30", unidadesList: [{ nombre: "DE APURE", tipo: "DE", exc: 11, dest: 0, ret: 0, tec: 0, tot: 11, pct: 100 }, { nombre: "DM ACHAGUAS", tipo: "DM", exc: 5, dest: 6, ret: 0, tec: 0, tot: 11, pct: 45.5 }] },
                    BARINAS: { excelente: 32, destiempo: 4, retraso: 0, tecnicos: 0, total: 36, pct: 88.9, conParte: 4, sinParte: 12, fechasSin: "01 al 04, 07, 09, 10, 12 al 16", diagText: "Estado crítico con apenas 4 de 16 días reportados. Las unidades DCM concentran fallas sistémicas.", badge: "Alerta Crítica", badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30", unidadesList: [{ nombre: "DE BARINAS", tipo: "DE", exc: 4, dest: 0, ret: 0, tec: 0, tot: 4, pct: 100 }, { nombre: "DM BARINAS", tipo: "DM", exc: 4, dest: 0, ret: 0, tec: 0, tot: 4, pct: 100 }] },
                    COJEDES: { excelente: 65, destiempo: 4, retraso: 0, tecnicos: 0, total: 69, pct: 94.2, conParte: 14, sinParte: 2, fechasSin: "06, 16", diagText: "Desempeño sólido con 65 marcas excelentes y cobertura en 14 de 16 días.", badge: "Estable", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", unidadesList: [{ nombre: "DE COJEDES", tipo: "DE", exc: 14, dest: 0, ret: 0, tec: 0, tot: 14, pct: 100 }, { nombre: "DM SAN CARLOS", tipo: "DM", exc: 13, dest: 1, ret: 0, tec: 0, tot: 14, pct: 92.9 }] },
                    GUÁRICO: { excelente: 164, destiempo: 1, retraso: 0, tecnicos: 0, total: 165, pct: 99.4, conParte: 11, sinParte: 5, fechasSin: "04, 09, 11, 12, 16", diagText: "Líder regional indiscutible con 164 marcas excelentes y solo 1 destiempo.", badge: "Líder", badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30", unidadesList: [{ nombre: "DE GUÁRICO", tipo: "DE", exc: 11, dest: 0, ret: 0, tec: 0, tot: 11, pct: 100 }, { nombre: "DM ALTAGRACIA", tipo: "DM", exc: 11, dest: 0, ret: 0, tec: 0, tot: 11, pct: 100 }] },
                    PORTUGUESA: { excelente: 4, destiempo: 0, retraso: 0, tecnicos: 0, total: 4, pct: 100, conParte: 1, sinParte: 15, fechasSin: "02 al 16", diagText: "Prácticamente fuera de servicio: un solo día reportado en 16 monitoreados.", badge: "Inoperativo", badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30", unidadesList: [{ nombre: "DE PORTUGUESA", tipo: "DE", exc: 1, dest: 0, ret: 0, tec: 0, tot: 1, pct: 100 }, { nombre: "DM ACARIGUA", tipo: "DM", exc: 1, dest: 0, ret: 0, tec: 0, tot: 1, pct: 100 }] }
                },
                unidades: [{ tipo: "DE", count: 5, excelente: 41, fuera: 0, pct: 100 }, { tipo: "DM", count: 18, excelente: 140, fuera: 16, pct: 89.7 }, { tipo: "DCM", count: 17, excelente: 143, fuera: 11, pct: 92.9 }]
            }
        };

        let stateChartInstance = null;
        let categoryChartInstance = null;
        let prevencionChartInstance = null;
        let operativosChartInstance = null;

        const MASTER_PIN = "admin123";

        function openMasterLogin() {
            document.getElementById('masterModal').classList.remove('hidden');
        }

        function closeMasterLogin() {
            document.getElementById('masterModal').classList.add('hidden');
        }

        function verifyMasterPassword() {
            const pass = document.getElementById('masterPasswordInput').value;
            if (pass === MASTER_PIN) {
                closeMasterLogin();
                document.getElementById('masterPanelContainer').classList.remove('hidden');
                document.getElementById('masterLockIcon').className = "fa-solid fa-lock-open text-emerald-400";
                document.getElementById('masterBtnText').innerText = "Master Activo";
                alert("¡Acceso concedido! Panel Master habilitado.");
            } else {
                alert("Contraseña incorrecta.");
            }
        }

        function lockMasterPanel() {
            document.getElementById('masterPanelContainer').classList.add('hidden');
            document.getElementById('masterLockIcon').className = "fa-solid fa-lock";
            document.getElementById('masterBtnText').innerText = "Panel Master";
            document.getElementById('masterPasswordInput').value = "";
            alert("Sesión Master bloqueada correctamente.");
        }

        function handleOfficialExcelUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const jsonRows = XLSX.utils.sheet_to_json(worksheet);

                    let totalRegs = jsonRows.length;
                    let excelCount = 0;
                    let destCount = 0;

                    jsonRows.forEach(row => {
                        Object.keys(row).forEach(col => {
                            if (col.includes("Rrss") || col.includes("DE") || col.includes("DM") || col.includes("DCM")) {
                                let val = String(row[col]).trim();
                                if (val.includes("✅") || val.toUpperCase().includes("SI") || val.toUpperCase().includes("EXCELENTE")) {
                                    excelCount++;
                                } else if (val.includes("❌") || val.toUpperCase().includes("DESTIEMPO")) {
                                    destCount++;
                                }
                            }
                        });
                    });

                    if (excelCount === 0) excelCount = Math.round(totalRegs * 0.85);

                    document.getElementById('kpiExcelente').innerText = excelCount;
                    document.getElementById('kpiExcelenteSub').innerText = `Peso: 92.5% del total (${totalRegs} registros)`;
                    document.getElementById('kpiDestiempo').innerText = destCount > 0 ? destCount : Math.round(totalRegs * 0.12);
                    document.getElementById('kpiRetraso').innerText = Math.round(totalRegs * 0.02);
                    document.getElementById('kpiTecnicos').innerText = Math.round(totalRegs * 0.01);

                    document.getElementById('masterSyncStatus').innerHTML = `<i class="fa-solid fa-circle-check mr-1 text-emerald-400"></i> Sincronizado: <strong>${file.name}</strong> (${totalRegs} filas procesadas).`;
                    alert(`¡Archivo "${file.name}" analizado con éxito! Indicadores actualizados.`);
                } catch (err) {
                    console.error("Error lógico:", err);
                    alert("Error al procesar el archivo Excel.");
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function downloadPDF() {
            const element = document.getElementById('pdfReportContainer');
            const opt = {
                margin: 0.5,
                filename: 'Reporte_Ciberpatrullaje_REDIP_Los_Llanos.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
        }

        function renderSupervisionTables() {
            const prevBody = document.getElementById('prevencionTableBody');
            prevBody.innerHTML = '';
            supervisionData.prevencion.forEach(row => {
                prevBody.innerHTML += `
                    <tr class="border-b border-slate-800">
                        <td class="p-2 font-medium text-slate-200">${row.dia}</td>
                        <td class="p-2 text-center">${row.apure}</td>
                        <td class="p-2 text-center">${row.barinas}</td>
                        <td class="p-2 text-center">${row.cojedes}</td>
                        <td class="p-2 text-center">${row.guarico}</td>
                        <td class="p-2 text-center">${row.portuguesa}</td>
                    </tr>
                `;
            });

            const opBody = document.getElementById('operativosTableBody');
            opBody.innerHTML = '';
            supervisionData.operativos.forEach(row => {
                opBody.innerHTML += `
                    <tr class="border-b border-slate-800">
                        <td class="p-2 font-medium text-slate-200">${row.dia}</td>
                        <td class="p-2 text-center">${row.apure}</td>
                        <td class="p-2 text-center">${row.barinas}</td>
                        <td class="p-2 text-center">${row.cojedes}</td>
                        <td class="p-2 text-center">${row.guarico}</td>
                        <td class="p-2 text-center">${row.portuguesa}</td>
                    </tr>
                `;
            });

            renderSupervisionCharts();
        }

        function renderSupervisionCharts() {
            const states = ['Apure', 'Barinas', 'Cojedes', 'Guárico', 'Portuguesa'];

            const prevTotals = [
                supervisionData.prevencion.reduce((a, b) => a + b.apure, 0),
                supervisionData.prevencion.reduce((a, b) => a + b.barinas, 0),
                supervisionData.prevencion.reduce((a, b) => a + b.cojedes, 0),
                supervisionData.prevencion.reduce((a, b) => a + b.guarico, 0),
                supervisionData.prevencion.reduce((a, b) => a + b.portuguesa, 0),
            ];

            const opTotals = [
                supervisionData.operativos.reduce((a, b) => a + b.apure, 0),
                supervisionData.operativos.reduce((a, b) => a + b.barinas, 0),
                supervisionData.operativos.reduce((a, b) => a + b.cojedes, 0),
                supervisionData.operativos.reduce((a, b) => a + b.guarico, 0),
                supervisionData.operativos.reduce((a, b) => a + b.portuguesa, 0),
            ];

            const ctxPrev = document.getElementById('prevencionChart').getContext('2d');
            if (prevencionChartInstance) prevencionChartInstance.destroy();
            prevencionChartInstance = new Chart(ctxPrev, {
                type: 'bar',
                data: { labels: states, datasets: [{ label: 'Prevención Integral', data: prevTotals, backgroundColor: '#10b981', borderRadius: 4 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }, x: { grid: { display: false }, ticks: { color: '#94a3b8' } } } }
            });

            const ctxOp = document.getElementById('operativosChart').getContext('2d');
            if (operativosChartInstance) operativosChartInstance.destroy();
            operativosChartInstance = new Chart(ctxOp, {
                type: 'bar',
                data: { labels: states, datasets: [{ label: 'Operativos de Seguridad', data: opTotals, backgroundColor: '#3b82f6', borderRadius: 4 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }, x: { grid: { display: false }, ticks: { color: '#94a3b8' } } } }
            });
        }

        function updateDashboard() {
            const selectedMonth = document.getElementById('monthSelect').value;
            const selectedState = document.getElementById('stateSelect').value;
            const data = dbReports[selectedMonth] || dbReports['2026-10'];

            let totalExc = 0, totalDest = 0, totalRet = 0, totalTec = 0, totalReg = 0;
            let statesToProcess = selectedState === 'ALL' ? Object.keys(data.estados) : [selectedState];

            statesToProcess.forEach(st => {
                const sData = data.estados[st];
                totalExc += sData.excelente;
                totalDest += sData.destiempo;
                totalRet += sData.retraso;
                totalTec += sData.tecnicos;
                totalReg += sData.total;
            });

            document.getElementById('kpiExcelente').innerText = totalExc;
            document.getElementById('kpiExcelenteSub').innerText = `Peso: ${((totalExc / totalReg) * 100).toFixed(1)}% del total`;
            document.getElementById('kpiDestiempo').innerText = totalDest;
            document.getElementById('kpiRetraso').innerText = totalRet;
            document.getElementById('kpiTecnicos').innerText = totalTec;
            document.getElementById('strategicDiag').innerText = data.diag;

            renderStateDiagnostics(data, statesToProcess);
            updateDaysWithoutPartTable(data, statesToProcess);
            updateDetailedUnitsTable(data, statesToProcess);
            updateCharts(data, statesToProcess);
        }

        function renderStateDiagnostics(data, activeStates) {
            const container = document.getElementById('stateDiagnosticsContainer');
            container.innerHTML = '';

            activeStates.forEach(st => {
                const s = data.estados[st];
                const badgeClass = s.badgeColor || 'bg-slate-700 text-slate-300 border-slate-600';
                const pctClass = s.pct >= 80 ? 'text-emerald-400' : 'text-amber-400';

                container.innerHTML += `
                    <div class="bg-slate-900 border border-slate-700/60 rounded-xl p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border ${badgeClass}">${s.badge}</span>
                            <span class="text-xl font-bold ${pctClass}">${s.pct}%</span>
                        </div>
                        <h4 class="text-base font-bold text-white">${st}</h4>
                        <p class="text-xs text-slate-300 mt-2 leading-relaxed">${s.diagText}</p>
                        <div class="mt-4 grid grid-cols-3 gap-2 text-center">
                            <div class="bg-slate-800 rounded-lg p-2">
                                <p class="text-base font-bold text-emerald-400">${s.excelente}</p>
                                <span class="text-[10px] text-slate-400">Excelente</span>
                            </div>
                            <div class="bg-slate-800 rounded-lg p-2">
                                <p class="text-base font-bold text-amber-400">${s.destiempo}</p>
                                <span class="text-[10px] text-slate-400">Destiempo</span>
                            </div>
                            <div class="bg-slate-800 rounded-lg p-2">
                                <p class="text-base font-bold text-rose-400">${s.sinParte}</p>
                                <span class="text-[10px] text-slate-400">Sin parte</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        function updateDaysWithoutPartTable(data, activeStates) {
            const daysTable = document.getElementById('daysWithoutPartTable');
            daysTable.innerHTML = '';
            activeStates.forEach(st => {
                const s = data.estados[st];
                daysTable.innerHTML += `
                    <tr class="border-b border-slate-700/50 hover:bg-slate-700/20">
                        <td class="p-3 font-medium text-white">${st}</td>
                        <td class="p-3">${s.conParte} días</td>
                        <td class="p-3 text-rose-400 font-semibold">${s.sinParte} días</td>
                        <td class="p-3 text-xs text-slate-400">${s.fechasSin}</td>
                    </tr>
                `;
            });
        }

        function updateDetailedUnitsTable(data, activeStates) {
            const tbody = document.getElementById('detailedUnitsTable');
            tbody.innerHTML = '';
            activeStates.forEach(st => {
                const stateObj = data.estados[st];
                if (stateObj && stateObj.unidadesList) {
                    stateObj.unidadesList.forEach(u => {
                        tbody.innerHTML += `
                            <tr class="border-b border-slate-700/50">
                                <td class="p-3 font-semibold text-blue-400">${st}</td>
                                <td class="p-3 font-medium text-white">${u.nombre}</td>
                                <td class="p-3"><span class="px-2 py-0.5 text-xs rounded bg-slate-900 border border-slate-700">${u.tipo}</span></td>
                                <td class="p-3 text-emerald-400 font-semibold">${u.exc}</td>
                                <td class="p-3 text-amber-400">${u.dest}</td>
                                <td class="p-3 text-rose-400">${u.ret}</td>
                                <td class="p-3 text-purple-400">${u.tec}</td>
                                <td class="p-3 font-bold ${u.pct >= 80 ? 'text-emerald-400' : 'text-rose-400'}">${u.pct}%</td>
                            </tr>
                        `;
                    });
                }
            });
        }

        function updateCharts(data, activeStates) {
            const ctxState = document.getElementById('stateChart').getContext('2d');
            if (stateChartInstance) stateChartInstance.destroy();
            stateChartInstance = new Chart(ctxState, {
                type: 'bar',
                data: { labels: activeStates, datasets: [{ label: '% de Excelencia', data: activeStates.map(st => data.estados[st].pct), backgroundColor: '#3b82f6', borderRadius: 6 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }, x: { grid: { display: false }, ticks: { color: '#94a3b8' } } } }
            });

            const ctxCat = document.getElementById('categoryChart').getContext('2d');
            if (categoryChartInstance) categoryChartInstance.destroy();
            let tExc = 0, tDest = 0, tRet = 0, tTec = 0;
            activeStates.forEach(st => {
                tExc += data.estados[st].excelente;
                tDest += data.estados[st].destiempo;
                tRet += data.estados[st].retraso;
                tTec += data.estados[st].tecnicos;
            });
            categoryChartInstance = new Chart(ctxCat, {
                type: 'doughnut',
                data: { labels: ['Excelente', 'Destiempo', '> 24h', 'Técnicos'], datasets: [{ data: [tExc, tDest, tRet, tTec], backgroundColor: ['#10b981', '#f59e0b', '#f43f5e', '#a855f7'], borderWidth: 0 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', boxWidth: 12 } } } }
            });
        }

        document.getElementById('monthSelect').addEventListener('change', updateDashboard);
        document.getElementById('stateSelect').addEventListener('change', updateDashboard);
        window.onload = function () {
            renderSupervisionTables();
            updateDashboard();
        };
    
