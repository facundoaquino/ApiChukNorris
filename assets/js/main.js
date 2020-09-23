const joke = 'https://api.chucknorris.io/jokes/random';

// fetch ( joke).then(respuesta =>{
//  console.log(respuesta);

//el json() en este caso extrae el body de la respuesta , para ver el body ver el clg de arriba tambien devuelve una problema
//  respuesta.json().then(resp => console.log(resp))

// usando desestructuracion de argumentos
//  respuesta.json().then(({id,value})=>{
//      console.log(id);
//      console.log(value);
//  })
// })

/*---------------------- protip para encadenar promesas ---------------------*/

// fetch (joke)
//         .then(respuesta => respuesta.json())
//         .then(({id,value})=>{
//             console.log(id,value);
//         })

/*---------------------- centralizar peticones http ---------------------*/

const joke2 = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async () => {
	try {
		const respuesta = await fetch(joke2);
		// console.log(respuesta);
		if (!respuesta.ok) throw 'No se pudo realizar la peticion';
		const { icon_url, id, value } = await respuesta.json();
		return { icon_url, id, value };
	} catch (err) {
		throw err;
	}
};

obtenerChiste();

//colocar chistes en html

const $jokeButton = document.getElementById('jokeB');
const $containerJokes = document.getElementById('jokeContainer');

const crearHTML = ({id,icon_url,value}) => {
	// console.log(obj);
	const html = `<li class="joke">
    <img src=${icon_url} alt="">
    <p class="joketext">
        ${value}
    </p>
    
    </li>`;

	$containerJokes.insertAdjacentHTML('beforeend', html);
};

$jokeButton.addEventListener('click', async () => {
	crearHTML( await obtenerChiste());
});
