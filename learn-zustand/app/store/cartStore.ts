import type { Product } from "@/types/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
	id: number;
	title: string;
	price: number;
	image: string;
	quantity: number;
}

type CartState = {
	items: CartItem[];
};
type CartAction = {
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
};

const userCartStore = create<CartState & CartAction>()(
	persist(
		(set, get) => ({
			items: [] as CartItem[],
			addToCart: (product: Product): void => {
				const existingItem: CartItem | undefined = get().items.find(
					(item) => item.id === product.id,
				);

				if (existingItem) {
					set((state) => ({
						items: state.items.map((item) =>
							item.id === product.id
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					}));
					toast.success(`Added another ${product.title} to cart`);
					return;
				}

				set((state) => ({
					items: [
						...state.items,
						{
							id: product.id,
							title: product.title,
							price: product.price,
							image: product.images[0],
							quantity: 1,
						} as CartItem,
					],
				}));

				toast.success(`${product.title} added to cart`);
			},
			removeFromCart: (id): void => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				}));
				toast.success("Item removed from cart");
			},
		}),
		{
			name: "cart", // unique name for localStorage key
			skipHydration: false, // optional, default is false
		},
	),
);

export default userCartStore;
