// - Crie uma página `/imc`
// - Crie um link para a página
// - Crie um componente para fazer o cálculo do IMC
// - O componente deve conter inputs (altura e peso) e um botão calcular
// - Ao clicar em calcular, deve mostrar o IMC na tela
// - Índice de Massa Corporal = peso / altura * altura

import CalculadoraImc from "@/components/Imc/imc";

const ImcPage = () => {
  return (
    <div>
      <CalculadoraImc />
    </div>
  )
}

export default ImcPage