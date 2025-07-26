// GukiGifts - CaseBattle-style site for Telegram gifts
import React, { useState } from "react";
import { Button } from "lucide-react";
import { Gift, Wallet, ArrowDownCircle } from "lucide-react";

export default function App() {
  const [balance, setBalance] = useState(23.4);
  const [user, setUser] = useState({
    username: "@gukiboss",
    avatar: "https://i.imgur.com/1X3K3qG.png",
  });

  const handleDeposit = () => {
    setBalance((prev) => parseFloat((prev + 5).toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1f] to-[#1f1f2f] text-white font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-2xl font-bold text-pink-400">GukiGifts</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <Wallet className="w-4 h-4" />
            <span>{balance} TON</span>
          </div>
          <button onClick={handleDeposit} className="bg-green-500 hover:bg-green-600 text-sm px-4 py-2 rounded flex items-center">
            <ArrowDownCircle className="w-4 h-4 mr-1" /> Deposit 5 TON
          </button>
          <div className="flex items-center gap-2">
            <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            <span className="text-sm text-white/80">{user.username}</span>
          </div>
        </div>
      </header>
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Open Cases, Win Telegram Gifts
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Premium subscriptions, stickers, emoji — win everything straight into your Telegram account. Powered by TON.
        </p>
        <div className="mt-8">
          <button className="text-lg px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded flex items-center mx-auto">
            <Gift className="w-5 h-5 mr-2" /> Buy a Case
          </button>
        </div>
      </section>
    </div>
  );
}