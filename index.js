
    URL = "https://pokeapi.co/api/v2/pokemon/ditto";

    fetch(URL).then((response) => {
        return response.json();

    }).then((data) => {
        console.log(data);
    })

    function clickme () {
      document.getElementById("imgchange").src="pokemon.jpg";
      alert("changed")
    }