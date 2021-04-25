let baseRoute = require('./baseRoute.js');
const SerialPort = require('serialport');

const port = new SerialPort('COM3', {
  baudRate: 9600
});

baseRoute.get('/arduino/ledon',  function (req, res) {
   
    port.write('A', function(err) {
        if (err) {
          return console.log('Error on write: ', err.message)
        }
        console.log('power: ON');
      });   

    res.send('Sent command to Arduino ON');
});

baseRoute.get('/arduino/ledoff',  function (req, res) {
   
  port.write('B', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('power: off');
    });   

  res.send('Sent command to Arduino OFF');
});

   // Open errors will be emitted as an error event
   port.on('error', function(err) {
    console.log('Error: ', err.message);
  });

  port.on('readable', function () {
    console.log('Data:', port.read().toString());
  });

module.exports = baseRoute