import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { useCart } from '../../context/CartContext';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import styles from './Cart.module.css';
import shoppingIcon from '../../assets/cart-images/shopping-icon.svg';

export default function Cart() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    totalItems, 
    subtotal, 
    shipping, 
    vat, 
    totalToPay 
  } = useCart();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleDecreaseQuantity = (id: string, currentQty: number) => {
    if (currentQty === 1) {
      setSelectedItemId(id);
      onOpen();
    } else {
      updateQuantity(id, -1);
    }
  };

  const handleRemoveClick = (id: string) => {
    setSelectedItemId(id);
    onOpen();
  };

  const confirmRemove = () => {
    if (selectedItemId) {
      removeFromCart(selectedItemId);
      setSelectedItemId(null);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className={styles.emptyCart}>
          <h2>Your Cart is Empty</h2>
          <p>Explore our spring water and <Link to="/shop" className={styles.shopLink}>Shop Now</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.titleSection}>
        <h1>CART <span className={styles.itemCount}>({totalItems} Items)</span></h1>
      </div>

      <div className={styles.cartGrid}>
        {/* Left Column: Item List */}
        <div className={styles.itemList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              
              <div className={styles.itemInfo}>
                <h3 className={styles.itemName}>{item.name}</h3>
              </div>

              <div className={styles.quantitySelector}>
                <button className={styles.qtyBtn} onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>−</button>
                <span className={styles.qtyValue}>{item.quantity}</span>
                <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <div className={styles.itemPrice}>
                AED {(item.price * item.quantity).toFixed(2)}
              </div>

              <button className={styles.removeBtn} onClick={() => handleRemoveClick(item.id)} aria-label="Remove item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Right Column: Summary Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.deliveryPromo}>
            <div className={styles.promoIcon}>
              <img src={shoppingIcon} alt="Delivery truck icon" width="45" height="45" />
            </div>
            <p className={styles.promoText}>
              Enjoy FREE delivery on orders above AED 150.00
            </p>
          </div>

          <div className={styles.summarySection}>
            <h4 className={styles.summaryTitle}>Summary</h4>
            {cartItems.map((item) => (
              <div key={`summary-${item.id}`} className={styles.summaryItem}>
                <div className={styles.summaryInfo}>
                  <p className={styles.summaryName}>{item.name}</p>
                  <span className={styles.summaryQtyPrice}>
                    {item.quantity} quantity x AED {item.price.toFixed(2)}
                  </span>
                </div>
                <span className={styles.summaryValue}>AED {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className={styles.totalsSection}>
            <div className={styles.totalsRow}>
              <span className={styles.totalsLabel}>Total Amount</span>
              <span className={styles.totalsValue}>AED {subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.netRow}>
              <span className={styles.totalsLabel}>Net Amount :</span>
              <span className={styles.totalsValue}>AED {subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.couponSection}>
            <p className={styles.couponTitle}>Coupon Code</p>
            <div className={styles.couponInputRoot}>
              <input type="text" placeholder="Enter Coupon Code" className={styles.couponInput} />
              <button className={styles.applyBtn}>Apply</button>
            </div>
          </div>

          <div className={styles.extraCharges}>
            <div className={styles.totalsRow}>
              <span className={styles.totalsLabel}>Shipping Amount</span>
              <span className={styles.totalsValue}>AED {shipping.toFixed(2)}</span>
            </div>
            <div className={styles.totalsRow}>
              <span className={styles.totalsLabel}>VAT (Included)</span>
              <span className={styles.totalsValue}>AED {vat.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.finalPayRow}>
            <span className={styles.finalLabel}>To Pay</span>
            <span className={styles.finalValue}>AED {totalToPay.toFixed(2)}</span>
          </div>

        <button className={styles.checkoutBtn}>CHECKOUT</button>
      </div>
    </div>

    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={confirmRemove}
      title="Remove Item"
      message="Do you want to remove this item from cart?"
      confirmLabel="Yes"
      cancelLabel="Cancel"
    />
  </div>
);
}
