const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const port = 8000

app.use(express.json())
app.use(cors())

// **** API ROUTES ****
let apiRoutes = require("./routes/routes.js");
app.use( '/api', apiRoutes );

// **** REACT APP ****
// console.log(path.join( __dirname, '../', 'client', 'public' ))
app.use( express.static( path.join( __dirname, '../', 'client', 'public' ) ) );
app.get( "/*", ( req, res ) => res.sendFile( path.resolve( __dirname, '../', 'client', 'public', 'index.html' ) ) );

// process started callback
app.listen(port, () => {
  //            COLOR FOR TEXT
  console.log('\x1b[32m%s\x1b[0m', `*************************************\nFamily Tree Application Started Smoothly\n*************************************`)
})

// Process killed callback
process.once('SIGUSR2', () => {
  //            COLOR FOR TEXT
  console.log('\x1b[31m%s\x1b[0m', `*************************************\nSTOPPING SERVER\n*************************************`)
}) 

// sigint catch to run process killed callback
process.on('SIGINT', () => {
  //stop sigint > emit sigusr2 > reinit sigint
  process.emit('SIGUSR2')
  process.exit()
})
