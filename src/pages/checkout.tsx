import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import Subscription from '@components/common/subscription';
import PageHeader from '@components/ui/page-header';
import CheckoutForm from '@components/checkout/checkout-form';
import CheckoutCard from '@components/checkout/checkout-card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import React from 'react';
import CheckoutModal from '@components/modal/checkout-modal';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [orderDetails, setOrderDetails] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const onClose = () => setOpenModal(false);
  return (
    <>
      <PageHeader pageHeader="text-page-checkout" />
      <Container>
        <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
          <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
            <CheckoutForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setOpenModal={setOpenModal} setOrderDetails={setOrderDetails} />
          </div>
          <div className="md:w-full lg:w-2/5 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-10 rtl:lg:mr-10 ltr:xl:ml-14 rtl:xl:mr-14 flex flex-col h-full -mt-1.5">
            <CheckoutCard paymentMethod={paymentMethod} />
          </div>
        </div>
        <Subscription />
      </Container>
      <CheckoutModal open={openModal} onClose={onClose} orderDetails={orderDetails} />
    </>
  );
}

CheckoutPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  };
};
