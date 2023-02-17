const express = require('express')
const snarkjs = require("snarkjs")

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

const multer = require("multer")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img')
  },
  filename: function (req, file, cb) {
    cb(null, "photo.blob")
  }
})
const upload = multer({ storage })

// app.post('/upload', upload.single("photo"), async (req, res) => {
//   console.log(req.file);
// });

app.get('/generate-proof', async (req, res) => {
  let age = req.query.age
  if (age) {
    const { proof, publicSignals } =
      await snarkjs.groth16.fullProve({ "age": age, "rand": "1" }, "./public/zkp/main.wasm", "./public/zkp/main_0001.zkey");

    let data = `{ "proof": ${JSON.stringify(proof)}, "publicInput": ${JSON.stringify(publicSignals)} }`;
    res.json(JSON.parse(data))
  } else {
    res.json("error")
  }

})


app.get('/validate-proof', async (req, res) => {
  let proof = req.query.proof
  let signals = req.query.signals
  console.log(`Proof; ${proof}, Signals: ${signals}`)
  if (proof && signals) {
    const vkey = await fetch("http://localhost:8080/zkp/verification_key.json");
    const vkeyJSON = await vkey.json();
    const resp = await snarkjs.groth16.verify(vkeyJSON, JSON.parse(signals), JSON.parse(proof));

    res.json(`{"isAdult": "${JSON.stringify(signals)}"}`)
  } else {
    res.json("error")
  }

})



let port = 8080
console.log(`http://localhost:${port}`);
app.listen(port) 