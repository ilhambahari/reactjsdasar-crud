import React, { Component } from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'

export default class Crud extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanans: [],
             nama: "",
             deskripsi: "",
             harga: 0,
             id: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.id === ""){
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
        }else{
            const makananYgSelainDipilih = this.state.makanans
            .filter((makanan) => makanan.id !== this.state.id)
            .map((makanan) => {
                return makanan
            })

            this.setState({
                makanans: [
                    ...makananYgSelainDipilih,
                    {
                        id: this.state.id,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
        }

        this.setState({
            nama: '',
            deskripsi: '',
            harga: 0,
            id: ''
        })
    }

    editData = (id) => {
        const makananYgDipilih = this.state.makanans
        .filter((makanan) => makanan.id === id)
        .map((makanan) => {
            return makanan
        })

        this.setState({
            nama: makananYgDipilih[0].nama,
            deskripsi: makananYgDipilih[0].deskripsi,
            harga: makananYgDipilih[0].harga,
            id: makananYgDipilih[0].id
        })
    }

    hapusData = (id) => {
        const makananBaru = this.state.makanans
        .filter((makanan) => makanan.id !== id)
        .map((makanan) => {
            return makanan
        })

        this.setState({
            makanans: makananBaru
        })
    }
    
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
