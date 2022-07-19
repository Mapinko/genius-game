import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	* {
		box-sizing: border-box;
	}
     body{
		margin:0;
		padding:0;
		background-color: #f2ebbf;
     }
	button{
		font-family: "Jura", sans-serif;
		font-weight: bolder;
		font-size: 1.1rem;

		cursor:pointer;
		text-transform: uppercase;

		padding: 1em 3em;
		border: 0 none;
		border-radius: 20px;
	}
	ul, ol, li{
		list-style:none;
	}
	h1{
		color: #F06060;
		font-family: 'MuseoModerno', cursive;
		font-size: 4rem;

		text-transform: uppercase;
		text-shadow: 2px 2px black;

		@media (min-width: 760px) {
			font-size: 6rem;
		}
	}
	h2, h3 {
		color: #5c4b51;
		
		font-family: "Kumbh Sans", sans-serif;
		font-size: 1.5rem;	
		text-transform: uppercase;
		@media (max-width: 760px) {
			font-size: 1rem;
		}
	}
	h3, p, li{
		font-family: "Kumbh Sans", sans-serif;
	}
	p, li{
		font-weight: 600;
	}
`;
