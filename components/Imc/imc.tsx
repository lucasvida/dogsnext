'use client';

import { useState } from "react";

const CalculadoraImc = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState<number | null>(null);

    const calcularImc = () => {
        const alturaEmMetros = altura / 100;
        const imc = peso / (alturaEmMetros * alturaEmMetros);
        setResultado(imc);
    }
  return (
    <div>
        <p>Calculadora de IMC</p>
        <label htmlFor="peso">Peso (kg)</label>
        <input type="number" id="peso" name="peso" onChange={(e) => setPeso(Number(e.target.value))} />
        <label htmlFor="altura">Altura (cm)</label>
        <input type="number" id="altura" name="altura" onChange={(e) => setAltura(Number(e.target.value))} />
        <button onClick={calcularImc}>Calcular</button>
        <p>Seu IMC é: {resultado !== null ? resultado.toFixed(2) : 'Aguardando valores'}</p>
    </div>
  )
}

export default CalculadoraImc;