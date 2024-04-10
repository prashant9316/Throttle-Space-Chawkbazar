import Input from '@components/ui/input';
import { useForm } from 'react-hook-form';
import TextArea from '@components/ui/text-area';
import { useCheckoutMutation } from '@framework/checkout/use-checkout';
import { CheckBox } from '@components/ui/checkbox';
import Button from '@components/ui/button';

import { useTranslation } from 'next-i18next';
import { useCart } from '@contexts/cart/cart.context';
import React from 'react';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';

interface CheckoutInputType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  save: boolean;
  note: string;
}

interface CheckoutFormProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  setOpenModal: (open: boolean) => void;
  setOrderDetails: (order: any) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ paymentMethod, setPaymentMethod, setOpenModal, setOrderDetails }) => {

  const { items, removeItemFromCart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isGuest, setIsGuest] = React.useState<boolean>(false);

  const { t } = useTranslation();
  const { isPending } = useCheckoutMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputType>();

  const clearCart = () => {
    items.map((item) => removeItemFromCart(item.id));
  }

  const createOrder = async (input: CheckoutInputType) => {
    const orderDetails = {
      cart: items,
      billing: input,
      guestCheckout: isGuest,
      paymentMethod: paymentMethod
    }

    let host = '';
    if (process.env.NODE_ENV === 'development') {
      host += 'http://localhost:5055';
    } else {
      host += 'https://throttle-space-backend-service-app.onrender.com';
    }

    let api = '';
    if (isGuest === true) {
      api += '/api/order/guest-add';
    } else {
      api += '/api/order/add';
    }
    console.log(`${host}${api}`)
    const response = await fetch(`${host}${api}`, {
      method: 'POST',
      body: JSON.stringify(orderDetails),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('auth_token')}`
      }
    });
    const data = await response.json();
    if (data.error) {
      toast(data.error, {
        type: "error",
        autoClose: 2000,
      })
      return;
    } else {
      toast("Order Created Successfull!", {
        type: "success",
        autoClose: 2000,
      });
    }
    setOrderDetails(data.order);
    return data.order;
  }

  async function onSubmit(input: CheckoutInputType) {
    try {
      if (items.length === 0) {
        toast("Cart is Empty!", {
          type: "info",
          autoClose: 2000,
        })
        return;
      }
      if (Cookies.get('auth_token') === undefined && isGuest === false) {
        toast("Please Login or Select Guest Checkout", {
          type: "info",
          autoClose: 2000,
        })
        return;
      }
      // alert(paymentMethod)
      if (paymentMethod === '') {
        toast("Please Select Payment Method", {
          type: "info",
          autoClose: 2000,
        })
        return;
      } else if (paymentMethod === 'cod') {
        toast("COD is not available for this product!", {
          type: "warning",
          autoClose: 2000,
        })
        return;
      } else if (paymentMethod === 'online') {
        // if(cart == [])
        toast("Online Payment Selected!", {
          type: "success",
          autoClose: 2000,
        });
        const orderDetails = await createOrder(input);
        console.log(orderDetails);
        setOpenModal(true);
        clearCart();
        return;
      }
    } catch (error) {

    }
  }

  const handleGuestCheckout = (event: any) => {
    // event.preventDefault();
    setIsGuest(event.target.checked);
  }

  // function onSubmit(input: CheckoutInputType) {
  //   updateUser(input);
  //   Router.push(ROUTES.ORDER);
  // }

  React.useEffect(() => {
    // setOpenModal(true);
    if (Cookies.get('auth_token') !== undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, Cookies.get('auth_token')])

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        {t('text-shipping-address')}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center "
        noValidate
      >
        <div className="flex flex-col space-y-4 lg:space-y-5">
          {!isLoggedIn && (
            <div>
              <div className="relative flex items-center">
                <CheckBox label="Guest Checkout" onChange={handleGuestCheckout} />
              </div>
            </div>
          )}

          <div className="mt-4">
            <span className="text-lg font-medium text-heading">Payment Method</span>
            <div className="mt-2 flex flex-col">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-primary"
                  name="paymentMethod"
                  value="cod"
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2 text-sm text-body">Cash on Delivery [Cod Charges Rs 50/- extra]</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-primary"
                  name="paymentMethod"
                  value="online"
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2 text-sm text-body">Online Payment</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-first-name"
              {...register('firstName', {
                required: 'forms:first-name-required',
              })}
              errorKey={errors.firstName?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            />
            <Input
              labelKey="forms:label-last-name"
              {...register('lastName', {
                required: 'forms:last-name-required',
              })}
              errorKey={errors.lastName?.message}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            />
          </div>
          <Input
            labelKey="forms:label-address"
            {...register('address', {
              required: 'forms:address-required',
            })}
            errorKey={errors.address?.message}
            variant="solid"
          />
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              type="tel"
              labelKey="forms:label-phone"
              {...register('phone', {
                required: 'forms:phone-required',
              })}
              errorKey={errors.phone?.message}
              variant="solid"
              className="w-full lg:w-1/2 "
            />

            <Input
              type="email"
              labelKey="forms:label-email-star"
              {...register('email', {
                required: 'forms:email-required',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'forms:email-error',
                },
              })}
              errorKey={errors.email?.message}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            />
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <Input
              labelKey="forms:label-city"
              {...register('city')}
              variant="solid"
              className="w-full lg:w-1/2 "
            />

            <Input
              labelKey="forms:label-postcode"
              {...register('zipCode')}
              variant="solid"
              className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0"
            />
          </div>
          <div className="relative flex items-center ">
            <CheckBox labelKey="forms:label-save-information" />
          </div>
          <TextArea
            labelKey="forms:label-order-notes"
            {...register('note')}
            placeholderKey="forms:placeholder-order-notes"
            className="relative pt-3 xl:pt-6"
          />
          <div className="flex w-full">
            <Button
              className="w-full sm:w-auto"
              loading={isPending}
              disabled={isPending}
            >
              {t('common:button-place-order')}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
