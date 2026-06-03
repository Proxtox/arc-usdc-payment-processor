"use client";

import { useState } from 'react';

export default function PaymentProcessor() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handlePay = () => {
    alert(`Sending ${amount} USDC to ${recipient} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">USDC Payment Processor</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Amount (USDC)</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 border rounded-2xl text-xl"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-4 border rounded-2xl text-xl"
            placeholder="0x..."
          />
        </div>

        <button
          onClick={handlePay}
          className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Send Payment
        </button>
      </div>
    </div>
  );
}