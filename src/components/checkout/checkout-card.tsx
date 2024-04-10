import usePrice from '@framework/product/use-price';
import { useCart } from '@contexts/cart/cart.context';
import { CheckoutItem } from '@components/checkout/checkout-card-item';
import { CheckoutCardFooterItem } from './checkout-card-footer-item';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

interface CheckoutCardProps {
  paymentMethod: string;
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({ paymentMethod }) => {
  const { items, total, isEmpty } = useCart();
  let { price: subtotal } = usePrice({
    amount: total,
    currencyCode: 'INR',
  });
  useEffect(() => {
    if (paymentMethod === 'cod') {
      subtotal = subtotal + 50;
    } else {
      subtotal = subtotal;
    }
  }, [paymentMethod])
  const { t } = useTranslation('common');
  const checkoutFooter = [
    {
      id: 1,
      name: t('text-sub-total'),
      price: subtotal,
    },
    {
      id: 2,
      name: t('text-shipping'),
      price: t('text-free'),
    },
    {
      id: 3,
      name: t('text-total'),
      price: subtotal,
    },
  ];
  return (
    <div className="pt-12 md:pt-0 ltr:2xl:pl-4 rtl:2xl:pr-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t('text-your-order')}
      </h2>
      <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
        <span>{t('text-product')}</span>
        <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">
          {t('text-sub-total')}
        </span>
      </div>
      {!isEmpty ? (
        items.map((item) => <CheckoutItem item={item} key={item.id} />)
      ) : (
        <p className="text-red-500 lg:px-3 py-4">{t('text-empty-cart')}</p>
      )}
      {checkoutFooter.map((item: any) => (
        <CheckoutCardFooterItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CheckoutCard;
