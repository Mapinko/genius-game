import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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

`;
