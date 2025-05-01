interface ProductCardProps {
  product: {
    name: string;
    rating: number;
    price: number;
    image: any;
  };
}

declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard; 