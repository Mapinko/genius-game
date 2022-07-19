import { InstructionSection } from "./style";

const HowToPlay = () => {
	const instructions = [
		"Aperte o botão de partida. O GENIUS já vai dar o seu primeiro sinal!",
		"O jogo começou: repita o sinal, pressionando a lente colorida que brilhar.",
		"Observe que GENIUS aumenta o ritmo automaticamente.",
		"Se você errar alguma sequência ou demorar mais de 5 segundos para repetir um sinal, GENIUS reiniciará. Esse é o sinal da derrota:você perdeu o jogo e a sequência de sinais acabou.",
	];

	return (
		<InstructionSection>
			<h3>Como jogar:</h3>
			<ol>
				{instructions.map((instruction, index) => (
					<li key={index}>{instruction}</li>
				))}
			</ol>
		</InstructionSection>
	);
};

export default HowToPlay;
