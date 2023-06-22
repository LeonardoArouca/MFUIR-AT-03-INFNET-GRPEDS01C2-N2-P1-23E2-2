import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <div className="content">
          <ProductDetails />
          <div className="info-container">
            <SellerInfo />
            <div className="comments-questions-container">
              <Comments />
              <Questions />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Mercado Preso</h1>
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <h2>Produtos Relacionados</h2>
        <div className="product">
          <img src="bola.jpg" alt="Produto 1" />
          <h3>Produto 1</h3>
          <p>Descrição do Produto 1</p>
          <p>R$ 99,99</p>
        </div>
        <div className="product">
          <img src="alien.jpg" alt="Produto 2" />
          <h3>Produto 2</h3>
          <p>Descrição do Produto 2</p>
          <p>R$ 149,99</p>
        </div>
        <div className="product">
          <img src="ben.jpg" alt="Produto 3" />
          <h3>Produto 3</h3>
          <p>Descrição do Produto 3</p>
          <p>R$ 199,99</p>
        </div>
      </div>
    );
  }
}

class ProductDetails extends React.Component {
  render() {
    return (
      <div className="product-details">
        <h2>Detalhes do Produto</h2>
        <div className="product-image">
          <img src="cubo.webp" alt="Imagem do Produto" />
        </div>
        <div className="product-info">
          <h3>Nome do Produto</h3>
          <p>Descrição do Produto</p>
          <p>Preço: R$99,99</p>
          <p>Nota: 4.5</p>
        </div>
      </div>
    );
  }
}

class SellerInfo extends React.Component {
  render() {
    return (
      <div className="seller-info">
        <h2>Informações do Vendedor</h2>
        <p>Nome do Vendedor</p>
        <p>E-mail: vendedor@exemplo.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Nota: 4.2</p>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    const { nome, data, mensagem } = this.props;

    return (
      <div className="comment">
        <h4>{nome}</h4>
        <p>Data de publicação: {data}</p>
        <p>{mensagem}</p>
      </div>
    );
  }
}

class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        <h2>Comentários</h2>
        <Comment
          nome="Usuário 1"
          data="01/01/2022"
          mensagem="Ótimo produto! Recomendo."
        />
        <Comment
          nome="Usuário 2"
          data="05/02/2022"
          mensagem="Produto de qualidade, vale a pena."
        />
        <Comment
          nome="Usuário 3"
          data="10/03/2022"
          mensagem="Não gostei do produto, não recomendo."
        />
      </div>
    );
  }
}

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perguntas: [],
      novaPergunta: '',
    };
  }

  handleChange = (event) => {
    this.setState({ novaPergunta: event.target.value });
  };

  adicionarPergunta = () => {
    const { perguntas, novaPergunta } = this.state;
    if (novaPergunta.trim() !== '') {
      const novaLista = [...perguntas, novaPergunta];
      this.setState({ perguntas: novaLista, novaPergunta: '' });
    }
  };

  render() {
    const { perguntas, novaPergunta } = this.state;

    return (
      <div className="questions">
        <h2>Perguntas</h2>
        <div>
          <input
            type="text"
            value={novaPergunta}
            onChange={this.handleChange}
          />
          <button onClick={this.adicionarPergunta}>Adicionar</button>
        </div>
        <ul>
          {perguntas.map((pergunta, index) => (
            <li key={index}>{pergunta}</li>
          ))}
        </ul>
      </div>
    );
  }
}



export default App;