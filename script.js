[

    "Livro",{
        "Título": "It",
        "Autor":"Stephen King",
        "Ano da publicação":"1986",
        "Palavras-chaves": ["King","It","livro"]
    }
]

//--- QUESTÃO DOIS

const estudantes = [
    {"nome":"Marcio ","nota":"7,0"},
    {"nome":"Jardel","nota":"5,0"},
    {"nome":"Matheus","nota":"9,0"}
];

// Nova nota a ser atribuída a todos os estudantes
const novaNota = "10,0";

// Atualiza a nota de todos os estudantes
const estudantesAtualizados = estudantes.map(estudante => {
    return {...estudante, nota: novaNota};
});

console.log(estudantesAtualizados);