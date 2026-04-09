import ProfileTabs from "@/components/profile/ProfilesTabs";
import AddressesTab from "@/components/profile/tab/AddressesTab";
import OrdersTab from "@/components/profile/tab/OrdersTab";
import ReviewsTab from "@/components/profile/tab/ReviewsTab";
import SettingsTab from "@/components/profile/tab/SettingsTab";
import WishlistTab from "@/components/profile/tab/WishListTab";



export default async function ProfileTabPage({ params }) {

    const getParams = await params
    const { tab } = getParams


    // Tab content mapping
    const tabContent = {
        orders: <OrdersTab />,
        wishlist: <WishlistTab />,
        addresses: <AddressesTab />,
        reviews: <ReviewsTab />,
        settings: <SettingsTab />,
    };

    return (
        <div>
            <ProfileTabs activeTab={tab} />
            {/* Tab-specific content */}
            <div className="p-5">{tabContent[tab] || <div>Page not found</div>}</div>
        </div>
    );
}