//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
const filterCountry = data.filter((element) => {
  return element.country === "Brasil"
})

console.log(filterCountry);

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
const filterPrice = data.filter((element) => {
  const bigPrice = 200
  return element.price >= bigPrice;
})
console.log(filterPrice);

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
const filterIsOpen = data.filter((element) => {
  const open = true
  return element.isOpen === open;
})
console.log(filterIsOpen);

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
const filterHotelName = data.filter ((element) => {
  
  return element.name === "Copacabana Palace"

})

console.log(filterHotelName);


console.log(filterToBook);
