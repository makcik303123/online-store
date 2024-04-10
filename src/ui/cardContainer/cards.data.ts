import img1 from '../assets/images/warm-nest.png'

export const dogs = [
    {},
    {},
    {},
    {},
    {},
]

export interface ourProductType {
    image: string
    title: string
    productInfo: productInfoType
    price: string
    promotion?: string
}

export interface productInfoType {
    Product: string
    Size: string
}

export const ourProduct: ourProductType[] = [
    {
        image: img1,
        title: 'Reflex Plus Adult Cat Food Salmon',
        productInfo: {Product: 'Dog Food', Size: 'Dog Food'},
        price: '350.000 VND',
        promotion: 'Free Toy & Free Shaker'
    },
    {
        image: img1,
        title: 'Reflex Plus Adult Cat Food Salmon',
        productInfo:{Product: 'Dog Food', Size: 'Dog Food'},
        price: '350.000 VND',
        promotion: 'Free Toy & Free Shaker'
    },
]

