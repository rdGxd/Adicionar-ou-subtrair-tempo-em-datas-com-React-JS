export default function showDate(dateString, daysMonthsYears) {
  // Converte a data de entrada 'dateString' em um objeto Date
  const dateToShow = new Date(dateString);

  // Verifica se a data de entrada é válida (se é um valor de data válido)
  if (!dateString || !dateToShow.getTime()) return;

  // Define a hora na data para 3 horas UTC (pode ser uma correção de fuso horário)
  dateToShow.setUTCHours(3);

  // Extrai os valores de dias, meses e anos do objeto 'daysMonthsYears'
  const { days, months, years } = daysMonthsYears;

  // Adiciona a quantidade de dias, meses e anos aos valores da data de entrada
  if (days) dateToShow.setDate(dateToShow.getDate() + Number(days));
  if (months) dateToShow.setMonth(dateToShow.getMonth() + Number(months));
  if (years) dateToShow.setFullYear(dateToShow.getFullYear() + Number(years));

  // Retorna a data formatada como uma string no formato de data local
  return dateToShow.toLocaleDateString();
}
