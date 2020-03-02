type post = {
    autor: string,
    texto: string
}
const post1: post = {
    autor: "Brian",
    texto: "VidaLoka"
}
const post2: post = {
    autor: "Joao",
    texto: "VidaLoka Tbm Ama !"
}
const post3: post = {
    autor: "Joao",
    texto: "Bem vindo"
}
const post4: post = {
    autor: "Aldemir",
    texto: "Que esquisito"
}
const post5: post = {
    autor: "Leticia",
    texto: "me da uma bala"
}


const  posts : post[] = [post1, post2, post3, post4, post5]

const filtraPostsAutor = (post: post[], autor?: string) => {
    const filtroDePosts: post[] = post.filter((post)=> {
        return post.autor === autor
    })
    return filtroDePosts
}

const postsFiltrados: post[] = filtraPostsAutor(posts , "Joao")

console.log(postsFiltrados)