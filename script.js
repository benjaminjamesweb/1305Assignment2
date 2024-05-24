let isForward = true;
let timeout;
let isAnimating = false;

// Note to Prabh: I had a lot of help from ChatGPT for the following function (to toggle the background colour)
document.addEventListener('mousemove', () => {
    if (isAnimating) return; 

    clearTimeout(timeout);

    timeout = setTimeout(() => {
        if (isAnimating) return; 

        isAnimating = true; 

        if (isForward) {
            document.body.classList.add('animate-gradient-forward');
            document.body.classList.remove('animate-gradient-reverse');
        } else {
            document.body.classList.add('animate-gradient-reverse');
            document.body.classList.remove('animate-gradient-forward');
        }

        setTimeout(() => {
            if (isForward) {
                document.body.style.backgroundPosition = '100% 100%';
            } else {
                document.body.style.backgroundPosition = '0% 0%';
            }

            isForward = !isForward;

            document.body.classList.remove('animate-gradient-forward');
            document.body.classList.remove('animate-gradient-reverse');

            isAnimating = false;
        }, 1500); 
    }, 150); 
});



const products = [
    {
        id: 1,
        name: "Apple",
        category: "Fruits",
        price: 0.5,
        inStock: true,
        description: "A crisp, sweet red apple.",
        nutrition: {
            calories: 52,
            fat: 0.2,
            carbohydrates: 14,
            protein: 0.3
        }
    },
    {
        id: 2,
        name: "Banana",
        category: "Fruits",
        price: 0.3,
        inStock: true,
        description: "A ripe, yellow banana.",
        nutrition: {
            calories: 89,
            fat: 0.3,
            carbohydrates: 23,
            protein: 1.1
        }
    },
    {
        id: 3,
        name: "Carrot",
        category: "Vegetables",
        price: 0.2,
        inStock: true,
        description: "A fresh, crunchy carrot.",
        nutrition: {
            calories: 41,
            fat: 0.2,
            carbohydrates: 10,
            protein: 0.9
        }
    },
    {
        id: 4,
        name: "Bread",
        category: "Bakery",
        price: 2.5,
        inStock: true,
        description: "A loaf of freshly baked bread.",
        nutrition: {
            calories: 265,
            fat: 3.2,
            carbohydrates: 49,
            protein: 9
        }
    }
];

function loadTableData(products) {

    const tableBody = document.querySelector("#table tbody");

    tableBody.innerHTML = "";

    products.forEach(product => {
        let formattedPrice = `$${product.price.toFixed(2)}`;
        let row = `<tr>
                    <td>${product.name}</td>
                    <td>${formattedPrice}</td>
                    <td>${product.description}</td>
                </tr>`;
        tableBody.innerHTML += row;
    });
}

function sort() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    loadTableData(products);
}


loadTableData(products);
