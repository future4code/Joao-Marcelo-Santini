const post1 = {
    autor: "Brian",
    texto: "VidaLoka"
};
const post2 = {
    autor: "Joao",
    texto: "VidaLoka Tbm Ama !"
};
const post3 = {
    autor: "Joao",
    texto: "Bem vindo"
};
const post4 = {
    autor: "Aldemir",
    texto: "Que esquisito"
};
const post5 = {
    autor: "Leticia",
    texto: "me da uma bala"
};
const posts = [post1, post2, post3, post4, post5];
const filtraPostsAutor = (post, autor) => {
    const filtroDePosts = post.filter((post) => {
        return post.autor === autor;
    });
    return filtroDePosts;
};
const postsFiltrados = filtraPostsAutor(posts, "Joao");
console.log(postsFiltrados);
//# sourceMappingURL=exerc2.js.map