const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

let orders = [];

const adminUser = {
  email: 'admin@gmail.com',
  password: 'Division89',
};

loginState=false;

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === adminUser.email && password === adminUser.password) {
    res.status(200).json({ success: true, message: 'Login successful', redirectUrl: '/admin' });
    loginState=true;
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.post('loginState',(req,res)=>{
  if(loginState==true) res.status(200).json({success:true, message:{loginState}},);
  else res.status(401).json({success:false, message:{loginState}},);
})

app.post('/orders', (req, res) => {
  const { buyerName, buyerEmail, buyerAddress, creditCardInfo, products,phoneNumber } = req.body;
  console.log("Received Order Data:", req.body); // Log received data
  const orderId = orders.length + 1;
  orders.push({ id: orderId, buyerName, buyerEmail, buyerAddress,phoneNumber, creditCardInfo, products, status: 'Pending' });
  res.status(201).json({ success: true, message: 'Order received' }); // Ensure JSON response
});

app.get('/api/orders', (req, res) => {
  res.status(200).json(orders);
});

app.post('/api/orders/:id/approve', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = 'Approved';
    res.status(200).json({ success: true, message: 'Order approved' });
  } else {
    res.status(404).json({ success: false, message: 'Order not found' });
  }
});

app.post('/api/orders/:id/reject', (req, res) => {
  const orderId = parseInt(req.params.id);
  orders = orders.filter(order => order.id !== orderId);
  res.status(200).json({ success: true, message: 'Order rejected' });
});

app.post('/api/orders/:id/complete', (req, res) => {
  const orderId = parseInt(req.params.id);
  orders = orders.filter(order => order.id !== orderId);
  res.status(200).json({ success: true, message: 'Order completed' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
