<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Cadastro</title>
</head>

<header>Cadastro de Produtos</header>

<main>
   <section id="ajuste">
    <section id="title">
        <h2>Produtos</h2>
    </section>

    <section class="wrapper">

        <div class="lineInput">
            <label>Produto</label>
            <input type="text" id="produto" placeholder="Nome do produto">
        </div>

        <div class="lineInput">
            <label>Valor</label>
            <input type="number" id="preco" placeholder="Preço do produto">
        </div>

        <div class="lineInput">
            <label>Quantidade em estoque<label>
            <input type="number" id="qt_estoque" placeholder="Quantidade do produto">
        </div>

        <div id="botoes">
            <button id="salvar"  class="btn1">Salvar</button>
            <button id="cancelar">Cancelar</butto>
        </div>

    </section>

    <section id="content">

        <table border="1px">

            <thead id="thead">
                <th>ID</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th id="acoes">Ações</thc>
            </thead>

            <tbody id="tbody">
               
            </tbody>

        </table>
    </section>
   </section>
</main>

    




    <script src="./script.js"></script>
</body>
</html>