// pages/api/razorpay.
// // pages/api/razorpay.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const amount = 1000; // Replace with the actual amount
      const order = await createRazorpayOrder(amount);

      res.status(200).json({
        orderId: order.id,
        razorpayData: order,
      });
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).json({ error: "Unable to create Razorpay order" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
