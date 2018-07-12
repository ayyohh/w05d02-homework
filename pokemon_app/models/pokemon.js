

const pokemon = [
	{id: 1, name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
	{id: 2, name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
	{id: 3, name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
	{id: 4, name: "Charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
	{id: 6, name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
	{id: 7, name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
	{id: 8, name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
];

class Pokemon {
	constructor(data){
		this.name = data['name'];
		this.image = data['image'];
		this.id = data['id']
	}
	static create(data){
		let newPoke = new Pokemon(data);
		pokemon.push(newPoke);
		console.log(pokemon);
	}
	static all(){
		return pokemon;
	}
	static findOne(id){
		for (let i = 0; i < pokemon.length; i++){
			if(id == pokemon[i]['id']){
				return pokemon[i]
			}
		}
	}
	static update(id, updatedPoke){
		let ogPoke = Pokemon.findOne(id);
		ogPoke['name'] = updatedPoke['name'];
		ogPoke['image'] = updatedPoke['image'];
		console.log(pokemon);
	}
	static delete(id) {
		for (let i = 0; i < pokemon.length; i++) {
			if (pokemon[i].id === id) {
				pokemon.splice(i, 1)
			}
		}
	}
}

console.log(Pokemon.findOne(1));
module.exports = Pokemon
