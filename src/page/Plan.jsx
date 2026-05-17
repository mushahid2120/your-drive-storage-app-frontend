import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BaseUrl } from "../App";

export default function Plan() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [subscription, setSubscription] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaymentSuccessfull, setIsPaymentSuccessfull] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  const fetchingSubscriptionDetail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BaseUrl}/subscriptions`, {
        credentials: "include",
      });
      const data = await response.json();
      if (response.status !== 200) {
        nav("/login");
      }
      setSubscription(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BaseUrl}/auth`, {
        credentials: "include",
      });
      const data = await response.json();
      if (!data.error) {
        setUserDetail(data);
      } else {
        setIsAuthorized(false);
        nav("/login");
      }
    } catch (error) {
      console.log(error);
      setIsServerDown(true);
    }
  };

  useEffect(() => {
    if (location?.pathname === "/plan") {
      fetchingSubscriptionDetail();
      fetchUser();
    }
  }, [isPaymentSuccessfull]);

  console.log(subscription);

  useEffect(() => {
    const existingScriptTag = document.querySelector("#rzp");
    if (existingScriptTag) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.id = "rzp";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString();
    } catch (e) {
      return iso;
    }
  };

  const formatBytes = (bytes) => {
    if (!bytes && bytes !== 0) return "0 B";
    const abs = Math.abs(bytes);
    if (abs < 1024) return `${bytes} B`;
    if (abs < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    if (abs < 1024 * 1024 * 1024)
      return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
    return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
  };

  const planStorageLimits = {
    free: 20, // MB
    pro: 100, // MB
    premium: 200, // MB
  };

  const getStorageUsage = (user) => {
    // user.usedStorage and user.capacity are assumed to be bytes
    const usedBytes = Number(user?.usedStorage || 0);
    const capacityBytes = Number(user?.capacity || 0);
    const usedKb = Math.round(usedBytes / 1024);
    const usedMb = Math.round(usedBytes / 1024 / 1024);
    const usedGb = Math.round(usedBytes / 1024 / 1024 / 1024);

    // if capacity provided in bytes, use it; otherwise fallback to planStorageLimits
    let limitMb = 0;
    if (capacityBytes > 0) {
      limitMb = Math.round(capacityBytes / 1024 / 1024);
    } else if (subscription?.plan) {
      limitMb = planStorageLimits[subscription.plan] ?? 0;
    }

    const percent =
      limitMb > 0 ? Math.min(100, Math.round((usedMb / limitMb) * 100)) : 0;
    return {
      usedBytes,
      usedKb,
      usedMb,
      usedGb,
      limitMb,
      percent,
      remainingMb: Math.max(0, limitMb - usedMb),
    };
  };

  const planPrices = {
    monthly: { free: 0, pro: 299, premium: 699 },
    yearly: { free: 0, pro: 2999, premium: 6999 },
  };

  const computeUpgradeAmount = (subscription, targetPlan) => {
    if (!subscription?.createdAt || !subscription?.expiresAt) return null;

    const billing = subscription.billingCycle || "monthly";
    const prices = planPrices[billing] || planPrices.monthly;
    const currentPrice = prices[subscription.plan] ?? 0;
    const targetPrice = prices[targetPlan.toLowerCase()] ?? 0;

    const now = Date.now();
    const created = new Date(subscription.createdAt).getTime();
    const expires = new Date(subscription.expiresAt).getTime();
    const totalMs = Math.max(1, expires - created);
    const remainingMs = Math.max(0, expires - now);
    const credit = Math.round((currentPrice * remainingMs) / totalMs);
    const amountLeft = Math.max(0, targetPrice - credit);

    return {
      currentPrice,
      targetPrice,
      credit,
      amountLeft,
    };
  };

  const [isCanceling, setIsCanceling] = useState(false);

  const cancelSubscription = async () => {
    if (!subscription || !subscription._id) return;
    if (!confirm("Are you sure you want to cancel the subscription?")) return;
    setIsCanceling(true);
    try {
      const res = await fetch(`${BaseUrl}/subscriptions/`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        setSubscription(null);
      } else {
        console.log("Failed to cancel subscription");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsCanceling(false);
    }
  };

  const handleUpgradePlan = async () => {
    try {
      const response = await fetch(`${BaseUrl}/subscriptions/upgrade`,{
        credentials:"include",
        method:"PUT"
      });
      const data = await response.json();
      if (data.orderid) {
        openPopup(data.orderid);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  const handlePayment = async (plan, billCycle) => {
    if (location.pathname === "/") nav("/login");
    try {
      const response = await fetch(`${BaseUrl}/subscriptions`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan, billingCycle: billCycle }),
      });
      const data = await response.json();
      console.log(data.orderid);
      if (data.orderid) {
        openPopup(data.orderid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openPopup = (orderid) => {
    const rzpInstace = new Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY,
      order_id: orderid,
      currency: "INR",
      handler: function (response) {
        setIsPaymentSuccessfull(true);
      },
    });
    rzpInstace.open();
  };

  const planDetails = {
    monthly: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ),
        name: "Free",
        for: "Starter Plan",
        description: "Personal users who want to try the platform",
        price: "Free",
        included: [
          "500 MB secure storage",
          "File upload limit: 100 MB per file",
          "Access from 1 device",
          "Standard download speed",
          "Basic email support",
        ],
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
        name: "Pro",
        for: "For Students & Freelancers",
        description:
          "Students, freelancers, or small teams who need more space",
        price: "₹299/month",
        included: [
          "100 GB secure storage",
          "File upload limit: 50 GB per file",
          "Access from up to 3 devices",
          "Priority upload/download speed",
          "Email & chat support",
        ],
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        name: "Premium",
        for: "For Professionals & Creators",
        description: "Professionals and creators handling large media files",
        price: "₹699/month",
        included: [
          "250 GB secure storage",
          "File upload limit: 100 GB per file",
          "Access from up to 3 devices",
          "Priority upload/download speed",
          "Priority customer suppor",
        ],
      },
    ],
    yearly: [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ),
        name: "Free",
        for: "Starter Plan",
        description: "Personal users who want to try the platform",
        price: "Free",
        included: [
          "500 MB secure storage",
          "File upload limit: 100 MB per file",
          "Access from 1 device",
          "Standard download speed",
          "Basic email support",
        ],
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
        name: "Pro",
        for: "For Students & Freelancers",
        description:
          "Students, freelancers, or small teams who need more space",
        price: "₹2999/year",
        included: [
          "200 GB secure storage",
          "File upload limit: 2 GB per file",
          "Access from up to 3 devices",
          "Priority upload/download speed",
          "Email & chat support",
        ],
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        name: "Premium",
        for: "For Professionals & Creators",
        description: "Professionals and creators handling large media files",
        price: "₹6999/year",
        included: [
          "2TB  secure storage",
          "File upload limit: 10 GB per file",
          "Access from up to 3 devices",
          "Priority upload/download speed",
          "Priority customer suppor",
        ],
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg
          className="animate-spin h-10 w-10 text-blue-600"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <span className="ml-3 text-gray-600">Loading subscription...</span>
      </div>
    );
  }

  if (subscription && isPaymentSuccessfull) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto">
          <svg
            className="w-10 h-10 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mt-6">Payment Successful</h2>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your subscription is now active.
        </p>

        <div className="mt-6 bg-white border rounded-lg p-4 text-left">
          <p>
            <strong>Plan:</strong> {subscription.plan}
          </p>
          <p>
            <strong>Billing:</strong> {subscription.billingCycle}
          </p>
          <p>
            <strong>Purchased:</strong> {formatDate(subscription.createdAt)}
          </p>
          <p className="break-all">
            <strong>Order ID:</strong>{" "}
            {subscription.paymentDetail?.razorpay_order_id}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/home" className="px-4 py-2 rounded-lg border">
            Go to Dashboard
          </Link>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-60"
            onClick={async () => {
              setIsPaymentSuccessfull(false);
              await fetchUser();
            }}
          >
            View Your Plan
          </button>
        </div>
      </div>
    );
  }


  if (subscription && subscription.plan!=="Free" && subscription.status!=="processesing" ) {
    const now = Date.now();
    const expiresAt = subscription.expiresAt
      ? new Date(subscription.expiresAt).getTime()
      : null;
    let statusLabel = (subscription.status || "").toString().toLowerCase();
    if (subscription.status === "successfull" && expiresAt && expiresAt > now)
      statusLabel = "active";
    else if (
      subscription.status === "successfull" &&
      expiresAt &&
      expiresAt <= now
    )
      statusLabel = "expired";
    else if (statusLabel.includes("cancel")) statusLabel = "canceled";

    const storage = getStorageUsage(userDetail || {});
    const upgrade =
      subscription.plan === "pro"
        ? computeUpgradeAmount(subscription, "Premium")
        : null;

    return (
      <div className="max-w-3xl mx-auto p-8">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50">
            <svg
              className="w-8 h-8 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {subscription.plan?.toUpperCase()} Plan
            </h3>
            <div className="text-sm text-gray-600">
              Status:{" "}
              <span
                className={`font-medium ${statusLabel === "active" ? "text-green-600" : statusLabel === "expired" ? "text-yellow-600" : "text-red-600"}`}
              >
                {statusLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white border rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Purchased</p>
              <p className="font-medium">
                {formatDate(subscription.createdAt)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Expires</p>
              <p className="font-medium">
                {formatDate(subscription.expiresAt)}
              </p>
            </div>
            <div className="col-span-2 mt-2">
              <p className="text-sm text-gray-600">Storage usage</p>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                <span>{formatBytes(storage.usedBytes)} used</span>
                <span>{storage.remainingMb} MB left</span>
              </div>
              <div className="mt-3 h-4 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className={`${storage.percent > 90 ? "bg-red-500" : "bg-blue-600"} h-full`}
                  style={{ width: `${storage.percent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                {storage.percent}% of {storage.limitMb} MB used
              </p>
            </div>
          </div>
        </div>

        {upgrade && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <h2 className="text-lg font-semibold text-blue-900">
              Upgrade to Premium
            </h2>
            <p className="text-sm text-blue-700 mt-2">
              After applying remaining credit from your current plan, you'll
              need to pay:
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-gray-800">
                <div>
                  <strong>Target Price:</strong> ₹{upgrade.targetPrice}
                </div>
                <div>
                  <strong>Remaining Credit:</strong> ₹{upgrade.credit}
                </div>
                <div className="font-semibold">
                  <strong>Amount Left:</strong> ₹{upgrade.amountLeft}
                </div>
              </div>
              <div>
                <button
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                  onClick={handleUpgradePlan}
                >
                  Upgrade and Pay ₹{upgrade.amountLeft}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center gap-3">
          <Link to="/home" className="px-4 py-2 rounded-lg border">
            Go to Dashboard
          </Link>
          <button
            className="px-4 py-2 rounded-lg bg-red-500 text-white disabled:opacity-60"
            onClick={cancelSubscription}
            disabled={isCanceling}
          >
            {isCanceling ? "Cancelling..." : "Cancel Subscription"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Choose Your Perfect Plan
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Secure, reliable cloud storage for everyone. Start free, upgrade
          anytime.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${billingCycle === "monthly" ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:text-gray-900"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${billingCycle === "yearly" ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:text-gray-900"}`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {planDetails[billingCycle].map((plan, index) => (
          <div
            key={index}
            className="relative p-4 rounded-2xl bg-white border border-gray-200 transition-all duration-300 flex flex-col hover:shadow-lg"
          >
            <div className="absolute -top-4 right-8 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {plan.name}
            </div>

            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 bg-green-500/10 text-green-600">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-blue-500 font-medium">{plan.for}</p>
              <p className="text-sm text-gray-600 mb-6 h-10">
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
              </div>
            </div>

            <button
              className={`w-full py-2 text-center rounded-lg font-semibold mb-8 transition-all duration-200 ${plan.name === "Free" ? "bg-blue-500" : "bg-green-500"} text-white hover:bg-green-600 shadow-sm `}
              onClick={() => {
                if (plan.name !== "Free")
                  handlePayment(plan.name, billingCycle);
              }}
            >
              {plan.name === "Free" ? "Current Plan" : "Subscribe"}
            </button>

            <div className="space-y-4 flex-1">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                What's included
              </p>
              <ul className="space-y-3">
                {plan.included.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 shrink-0 text-green-500 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-gray-600">
        All plans include automatic backups and can be cancelled anytime
      </div>
    </div>
  );
}
