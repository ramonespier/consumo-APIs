const produto = {
    "descricao": document.querySelector('#descricao').value,
    "preco": document.querySelector('#preco')
}

function cadastraProduto (produtoPost) {
  const reqPost = new Request('http://localhost:3000/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(produtoPost)
  })

    fetch(reqPost)

}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produto));
