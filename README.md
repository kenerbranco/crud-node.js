## **CRUD Node.js**

### :thought_balloon: **Situação Problema**
Desenvolver o backend de uma pequena loja online fictícia. Sua primeira tarefa é criar um sistema básico de gerenciamento de produtos. Por enquanto, todos os dados devem ser armazenados em memória (usando arrays ou objetos JavaScript), sem persistência em banco de dados.

### :pushpin: **Requisitos**
Sistema deve ser composto por funções JavaScript que realizam as operações CRUD para produtos. Cada produto deve ter as seguintes propriedades:

- **`id`**: Um número único para identificar o produto (você deve gerar automaticamente).
- **`name`**: O nome do produto (string).
- **`price`**: O preço do produto (número).
- **`quantity`**: A quantidade em estoque (número).
- **`category`**: A categoria do produto (string, ex: "Eletrônicos", "Alimentos", "Livros").

### :memo: **Funções para implementação**
1. **`createProduct(name, price, quantity, category)`**:
    - Cria um novo produto com as informações fornecidas.
    - Gera um `id` único para o produto (pode ser um contador incremental).
    - Adiciona o novo produto à sua "base de dados" em memória.
    - **Retorna** o objeto do produto recém-criado.
    - **Validação:** O `name` não pode ser vazio e `price` e `quantity` devem ser números positivos. Se a validação falhar, retorne `null` e imprima uma mensagem de erro.
2. **`getAllProducts()`**:
    - **Retorna** um array contendo todos os produtos armazenados.
3. **`getProductById(id)`**:
    - Recebe um `id` como parâmetro.
    - **Retorna** o objeto do produto correspondente ao `id`, ou `null` se não for encontrado.
4. **`updateProduct(id, updates)`**:
    - Recebe um `id` e um objeto `updates` (contendo as propriedades do produto a serem atualizadas, como `name`, `price`, `quantity`, `category`).
    - Encontra o produto pelo `id` e atualiza apenas as propriedades presentes no objeto `updates`.
    - **Não deve permitir a atualização do `id`**.
    - **Retorna** o objeto do produto atualizado, ou `null` se o produto não for encontrado.
    - **Validação:** Se `price` ou `quantity` forem passados em `updates`, eles devem ser números positivos.
5. **`deleteProduct(id)`**:
    - Recebe um `id` como parâmetro.
    - Remove o produto correspondente da sua "base de dados" em memória.
    - **Retorna `true`** se o produto foi excluído com sucesso, ou **`false`** se o produto não foi encontrado.

### :trophy: **Conceitos desenvolvidos durante o projeto**

- :heavy_plus_sign: [C]rud: condicionais ✅;
- :mag_right: [R]read: find() e condicionais✅;
- :heavy_check_mark: [U]pdate: findIndex() e condicionais ✅;
- :heavy_minus_sign: [D]elete: find() e condicionais✅.

## **📋 Considerações Finais**

***Projeto Finalizado ✅***
