import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap');/*h1 font*/
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@600&display=swap'); /*h2 font*/
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap'); /*h3 font*/
	* {
		box-sizing: border-box;
	}
     body{
		margin:0;
		padding:0;
     }
	button{
		cursor:pointer;
	}
	ul, ol, li{
		list-style:none;
	}
	h1{
		color: #F06060;
		font-family: 'MuseoModerno', cursive;
		font-size: 5rem;
		text-transform: uppercase;
	}
	h2 {
		font-family: "Kumbh Sans", sans-serif;
		font-size: 1.5rem;	
	}

`;
