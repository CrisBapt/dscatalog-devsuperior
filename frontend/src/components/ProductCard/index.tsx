import { Product } from 'types/product';
import ProductPrice from 'components/ProductPrice';
import ProductImg from 'assets/images/product.png';

import './styles.css';

type Props = {
  product: Product;
}

const ProductCard = ({product} : Props) => {
  return (
      <div className="base-card product-card">
        <div className="card-top-container">
            <img src={ProductImg} alt='Nome do produto' />
        </div>
        <div className="card-bottom-container">
          <h6>Nome do produto</h6>
          <ProductPrice />
        </div>
      </div>
  );
};

export default ProductCard;
