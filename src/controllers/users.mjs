/* Users */
export const getUsersHandler = (req, res) => {
    res.send('GET users route')
}

export const postUsersHandler = (req, res) => {
    res.send('POST users route')
}

export const getUserByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`GET user by id route: ${req.params.id}`)
}

export const putUserByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`PUT user by id route: ${req.params.id}`)
}

export const patchUserByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`PATCH user by id route: ${req.params.id}`)
}

export const deleteUserByIdHandler = (req, res) => {
    console.log(req.params.id);
    res.send(`DELETE user by id route: ${req.params.id}`)
}