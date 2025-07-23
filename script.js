// --- Banco de Dados (Memória) ---
let products = [
    { id: 1, name: "Caneta Azul", price: 3.80, quantity: 20, category: "Material Escolar" },
    { id: 2, name: "Tablet Samsung S6", price: 1599, quantity: 5, category: "Eletrônicos" },
    { id: 3, name: "Pai Rico, Pai Pobre", price: 39.90, quantity: 15, category: "Livros" }
];

let nextProductId = 4; // Próximo "id" (incrementado automaticamente)

// --- Auxiliar: Verifica se um produto com o ID existe ---
function productExists(id) {
    const productId = Number(id);
    return products.some(product => product.id === productId);
}

// [C] --- Criação de Produto ---
function createProduct(name, price, quantity, category) {
    // Validação dados de entrada
    if (!name || name.trim() === "" || price <= 0 || quantity <= 0 || typeof price !== 'number' || typeof quantity !== 'number' || isNaN(price) || isNaN(quantity)) {
        console.log("Erro no cadastro: Nome inválido ou preço/quantidade não são números positivos. Tente novamente!");
        return null;
    }

    const newProduct = {
        id: nextProductId++,
        name: name.trim(),
        price: price,
        quantity: quantity,
        category: category
    };
    products.push(newProduct);
    console.log("Produto criado:", newProduct);
    return newProduct;
}

// [R] --- Consulta todos os Produtos em Memória ---
function getAllProducts() {
    console.log("Todos os produtos:", products);
    return products;
}

// [R] --- Leitura de um Produto Específico ---
function getProductById(id) {
    const productId = Number(id);
    const product = products.find(p => p.id === productId);

    if (product) {
        console.log(`Produto com ID ${id}:`, product);
        return product;
    } else {
        console.log(`Produto com ID ${id} não encontrado.`);
        return null;
    }
}

// [U] --- Atualização do Produto ---
function updateProduct(id, updates) {
    const productId = Number(id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        console.log(`Produto com ID ${id} não encontrado para atualização.`);
        return null;
    }

    // Validações para price e quantity nos updates
    if (updates.price !== undefined && (updates.price <= 0 || typeof updates.price !== 'number' || isNaN(updates.price))) {
        console.log("Valores inseridos incorretamente ('price') para atualização. Tente novamente!");
        return null;
    }
    if (updates.quantity !== undefined && (updates.quantity <= 0 || typeof updates.quantity !== 'number' || isNaN(updates.quantity))) {
        console.log("Valores inseridos incorretamente ('quantity') para atualização. Tente novamente!");
        return null;
    }

    // Garante que o ID não seja atualizado
    if (updates.id !== undefined) {
        console.log("Não é permitido atualizar o ID de um produto.");
        delete updates.id;
    }

    // Atualiza apenas os campos fornecidos no objeto updates
    products[productIndex] = { ...products[productIndex], ...updates };
    console.log(`Produto com ID ${id} atualizado:`, products[productIndex]);
    return products[productIndex];
}

// [D] --- Deletar Produto ---
function deleteProduct(id) {
    const productId = Number(id);
    const initialLength = products.length;
    
    // Filtra o array, removendo o produto com o ID especificado
    products = products.filter(product => product.id !== productId);

    if (products.length < initialLength) {
        console.log(`Produto com ID ${id} excluído com sucesso.`);
        return true;
    } else {
        console.log(`Produto com ID ${id} não encontrado para exclusão.`);
        return false;
    }
}

// --- Testes de Uso ---
console.log("--- TESTES ---");
getAllProducts();

console.log("\n--- Criando produtos ---");
const p1 = createProduct("Teclado Mecânico", 350.00, 10, "Periféricos");
const p2 = createProduct("Mouse Gamer", 180.00, 25, "Periféricos");
const p3 = createProduct("Monitor Ultrawide", 1200.00, 8, "Eletrônicos");

console.log("\n--- Todos os produtos após criação ---");
getAllProducts();

console.log("\n--- Buscando produto por ID (ID 2) ---");
getProductById(2);

console.log("\n--- Buscando produto inexistente (ID 99) ---");
getProductById(99);

console.log("\n--- Atualizando produto (ID 1: preço e quantidade) ---");
updateProduct(1, { price: 320.00, quantity: 12 });
console.log("Produto 1 após atualização:", getProductById(1));

console.log("\n--- Atualizando produto (ID 3: nome e categoria) ---");
updateProduct(3, { name: "Monitor Gamer", category: "Eletrônicos" });
console.log("Produto 3 após atualização:", getProductById(3));

console.log("\n--- Tentando atualizar ID (não deve mudar) ---");
updateProduct(1, { id: 100, price: 300 }); // Deve informar que não pode atualizar ID

console.log("\n--- Tentando atualizar produto inexistente (ID 999) ---");
updateProduct(999, { price: 100 });

console.log("\n--- Tentando criar produto com dados inválidos ---");
createProduct("", 50, 5, "Teste"); // Nome vazio
createProduct("Fone", -10, 5, "Áudio"); // Preço negativo
createProduct("Webcam", 50, 0, "Vídeo"); // Quantidade zero
createProduct("Câmera", "abc", 10, "Foto"); // Preço não numérico

console.log("\n--- Deletando produto (ID 2) ---");
deleteProduct(2);
console.log("Todos os produtos após exclusão do ID 2:", getAllProducts());

console.log("\n--- Tentando deletar produto inexistente (ID 99) ---");
deleteProduct(99);
console.log("Todos os produtos após tentativa de exclusão do ID 99:", getAllProducts());

// Re-verificando se o ID 1 e o ID 3 ainda existem e estão corretos
console.log("\n--- Verificando produto com ID 1 ---");
getProductById(1);
console.log("\n--- Verificando produto com ID 3 ---");
getProductById(3);
