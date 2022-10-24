import { CartProduct } from "../../models/Cart"
import { State } from "../../models/City"
import { Product } from "../../models/Product"


export const MOCK_LOCATIONS: State[] = [
    {id: 0, name: 'Alagoas', code:'AL',cities:['Maceió','Arapiraca','Maragogi']},
    {id: 1, name: 'São Paulo', code:'SP',cities:['São Paulo','Osasco']},
    {id: 2, name: 'Santa Catarina', code:'SC',cities:['Florianopolis','Trombudo Central']},
]

export const mockedCurrentCity = "Maceió";
export const mockedCurrentStateCode = "AL";

export const MOCK_ALLPRODUCTS: Product[] =[
    {
        name: 'Este donut não é apenas fofo',
        description: 'Donut do time dos doces, com calda de pitaya e recheio de cereja',
        price: 6.90,
        img: '/png/donut0.png',
        id: 0,
        tags: ['RECHEADO'],
    },
    {
        name: 'Horizon Zero Donut',
        description: 'Donut com massa de cenoura e recheado com caramelo picante',
        price: 8.90,
        img: '/png/donut1.png',
        id: 1,
        tags: ['RECHEADO','SEM CORANTES ARTIFICIAIS'],
    },
    {
        name: 'As circunstâncias especiais do meu Donut',
        description: 'Donut com cobertura de mirtilo e recheado com leite condensado de castanhas',
        price: 9.30,
        img: '/png/donut2.png',
        id: 2,
        tags: ['RECHEADO'],
    },
    {
        name: 'Banana Dish',
        description: 'Donut com massa de banana sem adição de açúcar, recheio de banana e cobertura de banana com baunilha',
        price: 8.50,
        img: '/png/donut3.png',
        id: 3,
        tags: ['RECHEADO','MENOS AÇÚCAR'],
    },
    {
        name: 'Asfofo',
        description: 'Donut com massa, recheio e cobertura de morango com baunilha',
        price: 7.20,
        img: '/png/donut4.png',
        id: 4,
        tags: ['RECHEADO'],
    },
    {
        name: 'Guerreiro Z',
        description: 'Donut com massa e cobertura de laranja e recheio de chocolate',
        price: 7.60,
        img: '/png/donut5.png',
        id: 5,
        tags: ['RECHEADO'],
    },
    {
        name: 'Wonder Dessert Priority',
        description: 'Donut tradicional com cobertura de doce de leite de soja e semente de girassol',
        price: 6.50,
        img: '/png/donut6.png',
        id: 6,
        tags: ['SEM GLÚTEN','SEM CORANTES ARTIFICIAIS'],
    },
    {
        name: 'Roscaloid',
        description: 'Donut com massa e cobertura de de limão com baunilha e recheio de leite condensado de castanhas',
        price: 8.10,
        img: '/png/donut7.png',
        id: 7,
        tags: ['RECHEADO','MENOS AÇÚCAR'],
    },
    {
        name: "Sugar sugar Donu'",
        description: 'Donut com massa e cobertura de chocolate, e recheio de chocolate branco',
        price: 9.20,
        img: '/png/donut8.png',
        id: 8,
        tags: ['RECHEADO','SEM CORANTES ARTIFICIAIS'],
    },
    {
        name: 'O Donut que eu vi naquele dia',
        description: 'Donut com massa e cobertura de baunilha, recheado com leite condensado de arroz',
        price: 9.30,
        img: '/png/donut9.png',
        id: 9,
        tags: ['RECHEADO','SEM GLÚTEN'],
    },
    {
        name: 'Trick and Treat',
        description: 'Donut com massa e cobertura de abóbora e recheio surpresa 😈',
        price: 8.90,
        img: '/png/donut10.png',
        id: 10,
        tags: ['RECHEADO'],
    },
    {
        name: 'Slam Drunk',
        description: 'Donut tradicional e sem recheio, com cobertura de chocolate',
        price: 9.80,
        img: '/png/donut11.png',
        id: 11,
        tags: ['SEM GLÚTEN','SEM CORANTES ARTIFICIAIS'],
    }
]

export const MOCK_CART: CartProduct[] =[
    {
        product: MOCK_ALLPRODUCTS[2],
        quantity: 5,
    },
    {
        product: MOCK_ALLPRODUCTS[1],
        quantity: 6,
    },
    {
        product: MOCK_ALLPRODUCTS[4],
        quantity: 3,
    },

]

export const deliveryPrice: number = 4.50;


