//Frequencia do plano

// Code	Name
// 1	Mensal
// 2	Bimestral
// 3	Trimestral
// 4	Semestral
// 5	Anual
// 6	Semanal
// 7	Diário

function PlanFrequence(vCode) {
    this.Id = 0;
    this.Name = null;
    this.Code = vCode;
}

module.exports = {
    PlanFrequence: PlanFrequence,
}