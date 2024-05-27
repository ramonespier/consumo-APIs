// <button type="button" id="btAdd">Adicionar</button>
const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';
btAdd.innerHTML = 'Adicionar';

// <input type="text" id="preco">

const inputs = [
    { "type": "text", "id": "idProduto", "label": "ID" },
    { "type": "text", "id": "descricao", "label": "Descrição" },
    { "type": "text", "id": "preco", "label": "Preço" }
];

function criaDivForm (inputs) {

    const divForm = document.createElement('div');
    divForm.classList.add('form');

    inputs.forEach(produto => {

        const div = document.createElement('div')
        div.classList.add('controle-form');
    
        const i = document.createElement('input');
        i.type = produto.type;
        i.id = produto.id;
        i.placeholder = produto.label;
    
        // const l = document.createElement('label')
        // l.for = produto.id;
        // l.innerHTML = produto.label;
    
        div.append(i);
        divForm.append(div);
    });

    return divForm;
}

const divForm = criaDivForm(inputs);
divForm.append(btAdd);

document.body.append(divForm)

// const divForm = document.createElement('div');
// divForm.classList.add('form');
// divForm.append(divForm, btAdd);

// document.body.appendChild(divForm);

// const inputPreco = document.createElement('input');
// inputPreco.type = 'text';
// inputPreco.id = 'preco';
// inputPreco.placeholder = 'Preço';

// label for="preco">Preço</label>
// const labelPreco = document.createElement('label');
// labelPreco.for = 'preco';
// labelPreco.innerHTML = "Preço";