class Produto{
    constructor(){
        this.id = 1;
        this.arrayprodutos = [];
        this.editId = null;
    }
    salvar(){   
       let produto = this.lerDados();

       if(this.validaDados(produto) == true){
           if(this.editId == null){
            this.adicionar(produto)
           }else{
            this.atualizar(this.editId, produto);
           }
           console.log(this.editId)
       };
      
       this.listarTarefa();
       this.cancelar()
    }

    listarTarefa(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayprodutos.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_qt = tr.insertCell();
            let td_acoes = tr.insertCell();
            
            let imgedit = document.createElement('img');
            imgedit.src = 'editar.png';
            imgedit.setAttribute("onclick", "produto.editar("+JSON.stringify(this.arrayprodutos[i])+")");

            let imgdelete = document.createElement('img');
            imgdelete.src = 'delete.png';

            imgdelete.setAttribute("onclick", "produto.deletar("+this.arrayprodutos[i].id +")");

                td_id.innerText = this.arrayprodutos[i].id;
                td_nome.innerText = this.arrayprodutos[i].nomesProduto
                td_preco.innerText = this.arrayprodutos[i].preco
                td_qt.innerText = this.arrayprodutos[i].estoque

                td_acoes.appendChild(imgedit)
                td_acoes.appendChild(imgdelete)
        };
        console.log(this.arrayprodutos) 
    }

    adicionar(produto){
        produto.preco = parseFloat(produto.preco).toFixed(2)
        this.arrayprodutos.push(produto);
        this.id++;

        let produtos = {produto, preco}
        localStorage.setItem('produtos', JSON.stringify(produtos))

        let produtoString = localStorage.getItem('produtos')

        let produtosObj = JSON.parse(produtoString);
        console.log(produtosObj) 
    }

    editar(dados){
        this.editId = dados.id
        document.getElementById('produto').value = dados.nomesProduto
        document.getElementById('preco').value = dados.preco
        document.getElementById('qt_estoque').value = dados.estoque

        document.querySelector('.btn1').innerText = 'Atualizar'
        console.log(dados)
    }

    atualizar(id, produto){
        produto.preco = parseFloat(produto.preco).toFixed(2)
        for(let i = 0; i < this.arrayprodutos.length; i++){
            if(this.arrayprodutos[i].id == id){
                this.arrayprodutos[i].id == produto.id;
                this.arrayprodutos[i].nomesProduto = produto.nomesProduto;
                this.arrayprodutos[i].preco = produto.preco;
                this.arrayprodutos[i].estoque = produto.estoque;
            }
        }
    }

    lerDados(){
        let produto = {};

        produto.id = this.id;
        produto.nomesProduto = document.getElementById("produto").value;
        produto.preco = document.getElementById("preco").value;
        produto.estoque = document.getElementById("qt_estoque").value;

        return produto;
    }

   

    validaDados(produto){
        let msg = '';

        if(produto.nomesProduto == ''){
            msg += 'Informe o nome do produto \n'
        }

        if(produto.preco == ''){
            msg += 'Informe o preço do produto \n'
        }

        if(produto.estoque == ''){
            msg += 'Informe a quantidade do produto \n'
        }


        if(msg != ''){
            alert(msg)
            
            return false
        }

        return true

    }


    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('qt_estoque').value = '';

        document.querySelector(".btn1").innerText = 'Salvar';
        this.editId = null;
    }



    deletar(id){
       if(confirm("Você quer realmente deletar?")){
            for(let i = 0; i < this.arrayprodutos.length; i++){
                if(this.arrayprodutos[i].id == id){
                    this.arrayprodutos.splice(i, 1);
                    tbody.deleteRow(i)
                }
        }
       }

       console.log(this.arrayprodutos) 
    }


   botoes(){
    document.querySelector("#salvar").addEventListener('click', ()=>{
        produto.salvar()
    });
    
    document.getElementById("cancelar").addEventListener('click', ()=>{
        produto.cancelar()
    });
   }

}

let produto = new Produto();

produto.botoes()


let largura = window. screen.width;

if(largura < 768){
    document.getElementById('thead').style.display = 'none';
}

