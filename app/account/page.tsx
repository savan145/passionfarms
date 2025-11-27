"use client";

import { useState } from "react";
import AccountSidebar from "@/components/common/AccountSidebar";
import { Orders } from "@/components/account/Orders";
import { Addresses } from "@/components/account/Addresses";
import { GiftCards } from "@/components/account/GiftCards";
import { Privacy } from "@/components/account/Privacy";
import { Dashboard } from "@/components/account/Dashboard";
import { PaymentMethods } from "@/components/account/PaymentMethods";
import { Wishlist } from "@/components/account/Wishlist";
import Support from "@/components/common/Support";

const contentComponents: Record<string, React.ReactNode> = {
    dashboard: <Dashboard />,
    orders: <Orders />,
    addresses: <Addresses />,
    paymentMethods: <PaymentMethods />,
    wishlist: <Wishlist />,
    giftCards: <GiftCards />,
    privacy: <Privacy />,
};

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-12.5">
                <h1 className="text-3xl font-bold">Your Account</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-11.5">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-1">
                        <AccountSidebar activeTab={activeTab} onTabChange={setActiveTab} />
                    </aside>
                    <main className="lg:col-span-3">{contentComponents[activeTab]}</main>
                </div>
            </div>
            <Support />
        </div>
    );
}