const qrcode = require("qrcode");

// ✅ UPI Details (Modify with your UPI ID)
const UPI_ID = "yourupiid@upi"; // Example: yourname@oksbi

// ✅ Generate QR Code & Provide UPI ID Link
const getUPIDetails = async (req, res) => {
    try {
        const upiLink = `upi://pay?pa=${UPI_ID}&pn=SmartCanteen&cu=INR`; // UPI Payment Link
        const qrImage = await qrcode.toDataURL(upiLink); // Generate QR

        res.json({ upiId: UPI_ID, upiLink, qrImage });
    } catch (error) {
        res.status(500).json({ message: "Error generating UPI QR" });
    }
};

// ✅ User Confirms Payment Manually
const confirmPayment = async (req, res) => {
    const { transactionId, amount } = req.body;
    
    if (!transactionId || !amount) {
        return res.status(400).json({ message: "Transaction ID and amount are required" });
    }

    res.json({ success: true, message: "Payment confirmation received. Admin will verify." });
};

module.exports = { getUPIDetails, confirmPayment };
