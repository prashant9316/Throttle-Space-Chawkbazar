import React from "react";
import { toast } from "react-toastify";
import Router from 'next/router';
import { ROUTES } from '@utils/routes';

interface CheckoutModalProps {
    open: boolean;
    onClose: () => void;
    orderDetails: any;
}

export default function CheckoutModal({ open, onClose, orderDetails }: CheckoutModalProps) {
    const [paymentReference, setPaymentReference] = React.useState<string>(""); // [1, 2, 3, 4]
    const QRCodeHeight = '300px';
    const QRCodeWidth = '280px';
    // const modalHeight = '500px';
    const modalWidth = '300px';

    const handleCopy = () => {
        navigator.clipboard.writeText(orderDetails.orderId);
        toast.success("Order ID copied!");
    }

    const cancelOrder = () => {
        // cancel order
        onClose();
    }
    const updatePaymentReference = async () => {
        // alert(paymentReference)
        // update payment reference
        let host = '';
        if (process.env.NODE_ENV === 'development') {
            host += 'http://localhost:5055';
        } else {
            host += 'https://throttle-space-backend-service-app.onrender.com';
        }
        const api = `/api/order/add-payment-details/${orderDetails._id}`;

        const response = await fetch(host + api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refId: paymentReference,
            }),
        });
        // const data = await response.json();
        // console.log("data:", data)

        if (response.ok) {
            toast.success("Payment Reference Updated!");
        } else {
            toast.error("Failed to update Payment Details! Don't worry, your order is created successfully! Please contact us for order confirmation!");
        }
        onClose();
        Router.push(ROUTES.ORDER + orderDetails.orderId)
        // window.location.href = `/order/order-details/${orderDetails.orderId}`;
    }
    return (
        <div className="fixed w-screen top-0 left-0 h-screen items-center justify-center flex flex-col z-50 bg-black bg-opacity-50"
            style={{
                display: open ? "" : "none",
            }}
        >
            <div
                style={{
                    width: modalWidth,
                    backgroundColor: "white",
                    borderRadius: "10px",
                    zIndex: '100'
                }}
            >
                <h1 className="text-center text-black text-sm mt-4">Play Scan & Pay <br /> <span className="font-bold text-black ">₹{orderDetails !== undefined ? orderDetails.total : 0}/-</span> <br />Please enter <span onClick={handleCopy} className="bg-cyan-300 cursor-pointer">{orderDetails !== undefined ? orderDetails.orderId : ' '}</span> in description while doing the payment!</h1>
                <p onClick={handleCopy} className="text-center text-xs bg-cyan-300 p-1 mt-2 rounded-sm">click to copy ORDERID</p>
                <img
                    src="https://res.cloudinary.com/dmlbvaapl/image/upload/v1712743597/chced03je44uce4lvq2w.jpg"
                    alt="paymentQR"
                    className="my-2 mx-[10px]"
                    height={QRCodeHeight}
                    width={QRCodeWidth}
                />
                <p className="text-xs mb-0 pb-0 text-gray-600 text-center">Enter Reference Id of Payment</p>
                <p className="text-10px text-gray-400 text-center">(Last 4 digits)</p>
                <input
                    type="text"
                    placeholder="Payment Reference ID"
                    className="w-[40%] text-xs p-2 mt-[10px] border border-gray-300 rounded-md ml-[30%] my-2"
                    maxLength={4}
                    minLength={4}
                    value={paymentReference}
                    onChange={(e) => setPaymentReference(e.target.value)}
                />
                <button
                    className="bg-green-500 text-white w-full p-2 hover:bg-green-600 text-xs"
                    onClick={updatePaymentReference}
                >
                    Confirm Payment
                </button>

                <button
                    className="bg-red-500 text-white w-full p-2 hover:bg-red-600 mb-4 text-xs"
                    onClick={cancelOrder}
                >
                    Cancel Payment
                </button>
            </div>
        </div>
    );
}