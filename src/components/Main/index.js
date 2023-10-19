import React, { useState } from 'react'; // Importa o módulo 'react' e a função 'useState' para gerenciar estados
import showDate from '../../utils/showDate'; // Importa uma função chamada 'showDate' de um arquivo de utilitário
import Form from '../Form'; // Importa o componente 'Form' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function Main() {
  const [date, setDate] = useState(''); // Inicializa um estado para 'date' usando o useState hook

  const [daysMonthsYears, setDaysMonthsYears] = useState({
    days: 0,
    months: 0,
    years: 0,
  }); // Inicializa um estado para 'daysMonthsYears' usando o useState hook com valores iniciais

  return (
    <>
      <h1 className="main-title">Datas</h1>
      {' '}
      {/* Cria um título principal com a classe CSS 'main-title' */}

      <Form
        date={date}
        setDate={setDate}
        daysMonthsYears={daysMonthsYears}
        setDaysMonthsYears={setDaysMonthsYears}
      />
      {/* Renderiza o componente 'Form' com as propriedades 'date', 'setDate', 'daysMonthsYears' e 'setDaysMonthsYears' */}

      <p className="date">{showDate(date, daysMonthsYears)}</p>
      {/* Cria um parágrafo com a classe CSS 'date' e exibe o resultado da função 'showDate' com os valores 'date' e 'daysMonthsYears' */}
    </>
  );
}
