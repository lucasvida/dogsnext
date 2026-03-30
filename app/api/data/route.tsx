const dados = {
    "produtos": [
        {
            "id": 1,
            "nome": "Produto 1",
            "preco": 10
        },
        {
            "id": 2,
            "nome": "Produto 2",
            "preco": 20
        },
        {
            "id": 3,
            "nome": "Produto 3",
            "preco": 30
        },
        {
            "id": 4,
            "nome": "Produto 4",
            "preco": 40
        },
        {
            "id": 5,
            "nome": "Produto 5",
            "preco": 50
        },
        {
            "id": 6,
            "nome": "Produto 6",
            "preco": 60
        },
        {
            "id": 7,
            "nome": "Produto 7",
            "preco": 70
        },
        {
            "id": 8,
            "nome": "Produto 8",
            "preco": 80
        },
        {
            "id": 9,
            "nome": "Produto 9",
            "preco": 90
        },
        {
            "id": 10,
            "nome": "Produto 10",
            "preco": 100
        },
        {
            "id": 11,
            "nome": "Produto 11",
            "preco": 110
        },
        {
            "id": 12,
            "nome": "Produto 12",
            "preco": 120
        },
        {
            "id": 13,
            "nome": "Produto 13",
            "preco": 130
        },
        {
            "id": 14,
            "nome": "Produto 14",
            "preco": 140
        },
        {
            "id": 15,
            "nome": "Produto 15",
            "preco": 150
        },
        {
            "id": 16,
            "nome": "Produto 16",
            "preco": 160
        },
        {
            "id": 17,
            "nome": "Produto 17",
            "preco": 170
        },
        {
            "id": 18,
            "nome": "Produto 18",
            "preco": 180
        },
        {
            "id": 19,
            "nome": "Produto 19",
            "preco": 190
        },
        {
            "id": 20,
            "nome": "Produto 20",
            "preco": 200
        }
    ]
}

export async function GET() {
    return Response.json(dados);
}