
import axios from 'axios'

const api = axios.create({
    baseURL: '/api'
})
export default api

export const deleteRegistro = (id)=>{
    axios.delete(`/api/devices/${id}`)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))

}

export const editRegistro = (id,{nome, descricao, imagem})=>{
    axios
        .patch(`/api/devices/${id}`, {nome, descricao, imagem})
        .then(res => {
            console.log('Editado', res)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const addRegistro = ({nome, email, descricao, imagem})=>{
    axios
        .post(`/api/devices`, {nome, email, descricao, imagem})
        .then(res => {
            console.log('Adicionado', res)
            window.location.reload()
        })
        .catch(err => console.log(err))
}

export const sendMail = ({nome, email, mensagem})=>{
    axios.post(`/api/devices/send`, {nome, email, mensagem})
    .then(res => {
        console.log('Enviado', res)
        window.location.assign('http://localhost:3000')

    })
    .catch(err => console.log(err))
}
