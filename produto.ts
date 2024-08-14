interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function infolivro(livro: Livro): string {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}

const livro1: Livro = {
    titulo: "The Lord of the Rings",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1937
};

console.log(infolivro(livro1));