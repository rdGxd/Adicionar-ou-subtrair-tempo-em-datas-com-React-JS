import t from "prop-types"; // Importa o módulo 'prop-types' para definir as propriedades esperadas

import React from "react"; // Importa o módulo 'react'

import "./style.css"; // Importa um arquivo de estilo chamado 'style.css'

export default function Form({
  date,
  setDate,
  daysMonthsYears,
  setDaysMonthsYears,
}) {
  return (
    <form className="main-form">
      {" "}
      {/* Cria um formulário com a classe CSS 'main-form' */}
      <label htmlFor="main-date" className="main-date">
        {" "}
        {/* Cria um rótulo para a data */}
        <span>Data: </span> {/* Adiciona um texto "Data:" ao rótulo */}
        <input
          type="date"
          id="main-date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />{" "}
        {/* Cria uma entrada de data com a data fornecida e uma função onChange para atualizar a data */}
      </label>
      <label htmlFor="more-days">
        {" "}
        {/* Cria um rótulo para o número de dias */}
        <span>+/- Dias: </span> {/* Adiciona um texto "+/- Dias:" ao rótulo */}
        <input
          type="number"
          id="more-days"
          className="number-input"
          value={daysMonthsYears.days}
          onChange={(event) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              days: Number(event.target.value),
            })
          }
        />{" "}
        {/* Cria uma entrada numérica para os dias com a quantidade de dias fornecida e uma função onChange para atualizar os dias */}
      </label>
      <label htmlFor="more-months">
        {" "}
        {/* Cria um rótulo para o número de meses */}
        <span>+/- Meses: </span>{" "}
        {/* Adiciona um texto "+/- Meses:" ao rótulo */}
        <input
          type="number"
          id="more-months"
          className="number-input"
          value={daysMonthsYears.months}
          onChange={(event) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              months: Number(event.target.value),
            })
          }
        />{" "}
        {/* Cria uma entrada numérica para os meses com a quantidade de meses fornecida e uma função onChange para atualizar os meses */}
      </label>
      <label htmlFor="more-years">
        {" "}
        {/* Cria um rótulo para o número de anos */}
        <span>+/- Anos: </span> {/* Adiciona um texto "+/- Anos:" ao rótulo */}
        <input
          type="number"
          id="more-years"
          className="number-input"
          value={daysMonthsYears.years}
          onChange={(event) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              years: Number(event.target.value),
            })
          }
        />{" "}
        {/* Cria uma entrada numérica para os anos com a quantidade de anos fornecida e uma função onChange para atualizar os anos */}
      </label>
    </form>
  );
}

Form.propTypes = {
  date: t.string.isRequired, // Define que a propriedade 'date' deve ser uma string obrigatória
  setDate: t.func.isRequired, // Define que a propriedade 'setDate' deve ser uma função obrigatória
  daysMonthsYears: t.shape({
    days: t.number,
    months: t.number,
    years: t.number,
  }).isRequired, // Define que a propriedade 'daysMonthsYears' deve ser um objeto com as propriedades 'days', 'months' e 'years', todas obrigatórias
  setDaysMonthsYears: t.func.isRequired, // Define que a propriedade 'setDaysMonthsYears' deve ser uma função obrigatória
};
