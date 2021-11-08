const texto = 'List of mp3 files: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';

console.log(texto.match(/\.mp3/g)); //[ '.mp3', '.mp3', '.mp3', '.mp3' ]

//to learn in the future
console.log(texto.match(/\w+\.mp3/g)); //[ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]