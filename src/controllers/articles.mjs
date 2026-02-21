/* Articles */
export const getArticlesHandler = (req, res) => {
    res.send('GET articles route')
}

export const postArticlesHandler = (req, res) => {
    res.send('POST articles route')
}

export const getArticleByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`GET article by id route: ${req.params.id}`)
}

export const putArticleByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`PUT article by id route: ${req.params.id}`)
}

export const patchArticleByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`PATCH article by id route: ${req.params.id}`)
}

export const deleteArticleByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`DELETE article by id route: ${req.params.id}`)
}