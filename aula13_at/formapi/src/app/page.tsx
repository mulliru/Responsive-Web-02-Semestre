// Importações das bibliotecas necessárias
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
 
// Definição do esquema de validação utilizando Yup
const schema = yup.object().shape({
  nome: yup.string().required("O nome é de preenchimento obrigatório!"),
  email: yup.string().required("O email é preenchimento obrigatório!").email("Email incorreto!"),
  cpf: yup.string().required("O CPF é de preenchimento obrigatório!").min(11, "O CPF deve ter 11 dígitos!"),
  cep: yup.string().required("O campo é de preenchimento obrigatório!").min(8, "O CEP deve ter 8 dígitos!"),
  rua: yup.string(),
  numero: yup.string(),
  complemento: yup.string(),
  bairro: yup.string(),
  cidade: yup.string(),
  estado: yup.string(),
  ddd: yup.string()
}).required();
 
// Componente principal do formulário de cadastro de clientes
export default function Home() {
  // Hooks do React Hook Form para gerenciar o estado do formulário e as validações
  const { register, handleSubmit, formState: { errors }, setValue, setFocus } = useForm({ resolver: yupResolver(schema) });
 
  // Estado para armazenar a lista de clientes
  const [listaCliente, setListaCliente] = useState<any[]>([]);
 
  // Função para inserir um novo cliente na lista de clientes
  function inserirCliente(cliente: any) {
    setListaCliente([...listaCliente, cliente]);
  }
 
  // Função para buscar informações de endereço a partir do CEP digitado pelo usuário
  function buscaCep(e: { target: { value: string }; }) {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        // Atualiza os valores dos campos de endereço com os dados obtidos da API
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        setValue('ddd', data.ddd);
        // Define o foco no campo de número após preencher os dados do endereço
        setFocus('numero');
      });
  }
 
  // Renderização do formulário
  return (
    <>
      <form onSubmit={handleSubmit(inserirCliente)}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          {/* Campos do formulário */}
          <label htmlFor="nome">Nome:
            <input type="text" id="nome" {...register('nome')} />
            <span>{errors.nome?.message}</span>
          </label>
          <br />
          {/* Outros campos do formulário (email, cpf, cep, etc.) */}
          {/* ... */}
          {/* Botão de submissão do formulário */}
          <button type="submit">Gravar dados</button>
        </fieldset>
      </form>
    </>
  );
}
