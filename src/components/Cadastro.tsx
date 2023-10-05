<<<<<<< HEAD
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios';
const Cadastro = () => {

=======
import React, { Component, useState, ChangeEvent, FormEvent,useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../App.module.css'
import axios from 'axios'

const Cadastro =() => {

>>>>>>> 6b01d866245d99908b8d463bb65331a5c5105111
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [password, setPassword] = useState<string>("");

<<<<<<< HEAD
    const cadastrarUsuario = (e: FormEvent)=> {
=======
    const cadastrarUsuario = (e:FormEvent) => {
>>>>>>> 6b01d866245d99908b8d463bb65331a5c5105111
        e.preventDefault();

        const dados = {
            nome: nome,
            email: email,
            cpf: cpf,
<<<<<<< HEAD
            password: password

        }

        console.log(dados)

        axios.post('http://10.137.9.131:8000/api/store',
        dados,
        {
            headers:{
                "Accept": "aplication/json",
                "Content-Type": "aplication/json"
            }
        }
        ).then(function(response){
            window.location.href = "/listagem"
        }).catch(function(error){
            console.log(error)
        })

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "nome"){
            setNome(e.target.value)
        }
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value)
        }
        if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-tittle'>Cadastrar Cliente</h5>
                            <form onSubmit={cadastrarUsuario} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='from-label'>Nome</label>
                                    <input 
                                    type="text" 
                                    name='nome' 
                                    className='form-control'
                                    required 
                                    onChange={handleState}
                                    />                                    
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text"
                                    name='email'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text"
                                    name='cpf'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                     />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="text" 
                                    name='password'
                                    className='form-control'
                                    required
                                    onChange={handleState}
                                    />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Cadastro</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
=======
            password: password        
        
        }

        axios.post('http://10.137.9.131:8000/api/store',
        dados,
        {
            headers: {
             "Accept": "application/json",
             "Content-Type": "application/json"
            }
        }
        ).then(function(response){
            window.location.href = "/Listagem"
        }).catch(function(error){
            console.log(error);
        });
        
    }

    const handleState = (e:ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "nome"){
        setNome(e.target.value);
        }
        if(e.target.name === "cpf"){
            setCpf(e.target.value);
        }
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    }
    return(
        <div>   
           <Header />
               <main className={styles.main}>
                  <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Cliente</h5>
                            <form onSubmit={cadastrarUsuario} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required  onChange={handleState}/>
                                    {nome}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState}/>
                                    {email}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name="cpf" className='form-control' required onChange={handleState} />
                                    {cpf}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="password" className='form-control'>Senha</label>
                                    <input type="text" name='password' className='form-control' required onChange={handleState}/>
                                    {password}
                                </div>   
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                                </div>            
                            </form>
                        </div>
                    </div>
                  </div>
               </main>
           <Footer/>
>>>>>>> 6b01d866245d99908b8d463bb65331a5c5105111
        </div>
    );
}
export default Cadastro;