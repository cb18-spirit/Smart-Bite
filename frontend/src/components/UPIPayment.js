import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const UPIPayment = () => {
  const [upiDetails, setUpiDetails] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    // Fetch UPI QR Code & ID
    const fetchUPIDetails = async () => {
      try {
        const { data } = await axios.get("/api/payments");
        setUpiDetails(data);
      } catch (error) {
        console.error("Error fetching UPI details", error);
      }
    };
    fetchUPIDetails();
  }, []);

  const handleConfirmPayment = async () => {
    if (!transactionId || !amount) {
      setConfirmationMessage("⚠️ Please enter Transaction ID & Amount.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post("/api/payments/confirm", { transactionId, amount });
      setConfirmationMessage(`✅ ${data.message}`);
    } catch (error) {
      setConfirmationMessage("❌ Payment confirmation failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">Pay via UPI</h2>

      {upiDetails ? (
        <Card className="p-4 max-w-md">
          <CardContent className="flex flex-col items-center">
            <img src={upiDetails.qrImage} alt="UPI QR Code" className="w-40 h-40 mb-4" />
            <p className="text-lg font-semibold">UPI ID: {upiDetails.upiId}</p>
            <a href={upiDetails.upiLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Pay Now via UPI App
            </a>
          </CardContent>
        </Card>
      ) : (
        <p>Loading payment details...</p>
      )}

      <div className="mt-6 w-full max-w-md">
        <label className="block mb-2 text-sm font-medium">Transaction ID</label>
        <Input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />

        <label className="block mt-4 mb-2 text-sm font-medium">Amount (₹)</label>
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <Button className="mt-4 w-full" onClick={handleConfirmPayment} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : "Confirm Payment"}
        </Button>

        {confirmationMessage && <p className="mt-4 text-center">{confirmationMessage}</p>}
      </div>
    </div>
  );
};

export default UPIPayment;
