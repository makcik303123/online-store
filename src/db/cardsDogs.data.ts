import dog8 from "../assets/Card/dog8.png";
import dog1 from "../assets/Card/dog1.png";
import dog2 from "../assets/Card/dog2.png";
import dog3 from "../assets/Card/dog3.png";
import dog4 from "../assets/Card/dog4.png";
import dog5 from "../assets/Card/dog5.png";
import dog6 from "../assets/Card/dog6.png";
import dog7 from "../assets/Card/dog7.png";
import { ICard } from "./cardsProducts.data.ts";

export interface dogInfoType {
	Gene?: string;
	Age?: string;
}

export const ourDogs: ICard[] = [
	{
		image: dog1,
		title: "MO502 - Poodle Tiny Yellow",
		cardInfo: { Gene: "Female", Age: "02 months" },
		price: "3.900.000 VND",
	},
	{
		image: dog2,
		title: "MO102 - Poodle Tiny Sepia",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "4.000.000 VND",
	},
	{
		image: dog3,
		title: "MO512 - Alaskan Malamute Grey",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "8.900.000 VND",
	},
	{
		image: dog4,
		title: "MO502 - Poodle Tiny Yellow",
		cardInfo: { Gene: "Female", Age: "02 months" },
		price: "3.900.000 VND",
	},
	{
		image: dog5,
		title: "MO102 - Poodle Tiny Sepia",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "4.000.000 VND",
	},
	{
		image: dog6,
		title: "MO512 - Alaskan Malamute Grey",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "8.900.000 VND",
	},
	{
		image: dog7,
		title: "MO502 - Poodle Tiny Yellow",
		cardInfo: { Gene: "Female", Age: "02 months" },
		price: "3.900.000 VND",
	},
	{
		image: dog8,
		title: "MO512 - Alaskan Malamute Grey",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "8.900.000 VND",
	},
];
