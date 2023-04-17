export default (() => {
	const localStorageKeyName = "horses";
	const getItems = () => {
		return JSON.parse(localStorage.getItem(localStorageKeyName) ?? {});
	};
	const storeItems = (horses) => {
		localStorage.setItem(localStorageKeyName, JSON.stringify(horses));
	};
	const init = () => {
		storeItems(mockData);
	};

	return {
		getItems,
		storeItems,
		init,
	};
})();

const mockData = [
	{
		name: "Signor Gianni S.P.A.",
		breed: "1111111111",
		gender: "e.ciao@gmail.com",
		nickname: "334334334111",
		notes: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da so",
		id: 1,
	},
	{
		name: "Signor Gianni S.P.A.",
		breed: "1111111111",
		gender: "e.ciao@gmail.com",
		nickname: "334334334111",
		notes: "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da so",
		id: 2,
	},
	{
		name: "Signor Gianni S.P.A.",
		breed: "1111111111",
		gender: "e.ciao@gmail.com",
		nickname: "334334334111",
		notes: "e più recentemente da so",
		id: 3,
	},
];
