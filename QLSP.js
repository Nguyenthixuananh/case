let manufactureList = {
    "Nike": [
        "Air force", "Air Max", "Dunk", "Stussy"
    ],
    "Jordan": [
        "Air Jordan 1", "Air Jordan 3", "Air Jordan 4", "Air Jordan 5"
    ],
    "Adidas": [
        "Yeezy", "Ultraboost", "Stan Smith", "Pharrell"
    ]
}

let productList = []

let manuafacturerTag = document.getElementById('manuafacturer_name')
let x;
for (x in manufactureList) {
    manuafacturerTag.innerHTML += `<option value='${x}'>${x}</option>`
}
changeManufacturer();
function changeManufacturer() {
    x = manuafacturerTag.value
    categoryList = manufactureList[x]
    console.log(categoryList)

    let categoruTag = document.getElementById('category_name')
    categoruTag.innerHTML = ''

    if (categoryList != null) {
        for (let i = 0; i < categoryList.length; i++) {
            categoruTag.innerHTML += `<option value='${categoryList[i]}'>${categoryList[i]}</option>`
        }
    }
}

function updateTotalPrice() {
    let price = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value

    totalPrice = price * quantity

    document.getElementById('total_price').value = totalPrice
}

let count = 0

function addProduct() {
    // let index = document.getElementById('index').value
    let productName = document.getElementById('product_name').value
    let manufactureName = document.getElementById('manuafacturer_name').value
    let categoryName = document.getElementById('category_name').value
    let price = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value
    let totalPrice = document.getElementById('total_price').value

    let product = {
        'productName': productName,
        'manufactureName': manufactureName,
        'categoryName': categoryName,
        'price': price,
        'quantity': quantity,
        'totalPrice': totalPrice
    }

    // if (index !== '') {
    //     productList[index] = product
    //     showProduct()
    //     return;
    // }

    productList.push(product)

    showProduct();
}

function deleteProduct(index) {
    console.log(index)
    productList.splice(index, 1)
    showProduct();
}

function showProduct() {
    document.getElementById('result').innerHTML = ''

    for (let i = 0; i < productList.length; i++) {
        document.getElementById('result').innerHTML += `<tr>
						<td>${i + 1}</td>
						<td>${productList[i].productName}</td>
						<td>${productList[i].manufactureName}</td>
						<td>${productList[i].categoryName}</td>
						<td>${productList[i].price}</td>
						<td>${productList[i].quantity}</td>
						<td>${productList[i].totalPrice}</td>
						<td><button class="btn btn-warning" onclick="editProduct(${i})">Edit</button></td>
						<td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
					</tr>`
    }
}

function editProduct(index) {
    console.log(productList[index])
    let newName = prompt("Add new name", productList[index].productName)
    productList[index].productName = newName
    let newManufacture = prompt("Add new Manufacture", productList[index].manufactureName)
    productList[index].manufactureName = newManufacture
    let newCategory = prompt("Add new category", productList[index].categoryName)
    productList[index].categoryName = newCategory
    let newPrice = prompt("Add new price", productList[index].price)
    productList[index].price = newPrice
    let newQuantity = prompt("Add new quantity", productList[index].quantity)
    productList[index].quantity = newQuantity
    let newTotalPrice = newPrice * newQuantity
    productList[index].totalPrice = newTotalPrice
    showProduct();
}

