const express = require('express');
const { SerialPort } = require('serialport'); // Destructure SerialPort from the 'serialport' package
const Readline = require('@serialport/parser-readline');
const { ReadlineParser } = require('@serialport/parser-readline');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const serialPort = new SerialPort({
  path: 'COM11', // Update this to your Arduino's port
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: 'none'
});

const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }));

let arduinoData = {
  voltage: 0,
  steps: 0
};

parser.on('data', (data) => {
  const regex = /Voltage:(\d+.\d+),Steps:(\d+)/;
  const match = data.match(regex);
  if (match) {
    arduinoData.voltage = parseFloat(match[1]);
    arduinoData.steps = parseInt(match[2]);
  }
});

app.get('/data', (req, res) => {
  res.json(arduinoData);
  console.log("Steps : " +arduinoData.steps);
  console.log("Voltage : " +arduinoData.voltage);
  
});

app.listen(PORT, () => {
  console.log("Volt : " + arduinoData.voltage);
  console.log("Steps : " + arduinoData.steps);
});