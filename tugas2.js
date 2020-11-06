const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { parse } = require("path")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000")
})

// Tugas Praktikum Rest API Node JS

// Nomor 1
// Kubus
app.post("/kubus", (req,res) => {
    let panjang = Number(req.body.panjang)
    let luas = 6 * panjang * panjang
    let volume = panjang * panjang * panjang

    let response = {
        panjang: panjang,
        luas: luas,
        volume: volume
    }

    res.json(response)
})

//Balok
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas = 2 * (panjang*lebar + lebar*tinggi + panjang*tinggi)
    let volume = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }

    res.json(response)
})

// Tabung
app.post("/tabung", (req,res) => {
    let jari = Number(req.body.jari)
    let tinggi = Number(req.body.tinggi)
    let luas = 2 * 22/7 * jari * (jari * tinggi)
    let volume = 22/7 * jari * jari * tinggi

    let response = {
        jari: jari,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }

    res.json(response)
})

// Bola
app.post("/bola", (req,res) => {
    let jari = Number(req.body.jari)
    let luas = 4 * 22/7 * (jari * jari)
    let volume = 4 / 3 * 22/7 * (jari * jari * jari)

    let response = {
        jari: jari,
        luas: luas,
        volume: volume
    }

    res.json(response)
})

// Nomor 2
// Celcius
app.get("/convert/celcius/:degrees", (req,res) => {
    let degrees = req.params.degrees
    let reamur = 4 / 5 * degrees
    let fahrenheit = 9 / 5 * degrees + 32
    let kelvin = degrees + 273

    let response = {
        celcius: degrees,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})

// Reamur
app.get("/convert/reamur/:degrees", (req,res) => {
    let degrees = req.params.degrees
    let celcius = 5 / 4 * degrees
    let fahrenheit = 9 / 4 * degrees + 32
    let kelvin = 5 / 4 * degrees + 273

    let response = {
        reamur: degrees,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})

// Kelvin
app.get("/convert/kelvin/:degrees", (req,res) => {
    let degrees = req.params.degrees
    let reamur = 4 / 5 * ( degrees - 273 )
    let fahrenheit = 9 / 5 * ( degrees - 273 ) + 32
    let celcius = degrees - 273

    let response = {
        kelvin: degrees,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }

    res.json(response)
})

// Fahrenheit
app.get("/convert/fahrenheit/:degrees", (req,res) => {
    let degrees = req.params.degrees
    let reamur = 4 / 9 * ( degrees - 32 )
    let celcius = 5 / 9 * ( degrees - 32 )
    let kelvin = 5 / 9 * ( degrees - 32 ) + 273

    let response = {
        fahrenheit: degrees,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    res.json(response)
})

// Nomor 3
// Decimal
app.post("/decimal", (req,res) => {
    let decimal = Number(req.body.decimal)
    let biner = parseInt(decimal,10).toString(2)
    let octal = parseInt(decimal,10).toString(8)
    let hexa = parseInt(decimal,10).toString(16)

    let response = {
        decimal: decimal,
        result: {
            biner: biner,
            octal: octal,
            hexa: hexa
        }
    }

    res.json(response)
})

// Biner
app.post("/biner", (req,res) => {
    let biner = Number(req.body.biner)
    let decimal = parseInt(biner,2).toString(10)
    let octal = parseInt(biner,2).toString(8)
    let hexa = parseInt(biner,2).toString(16)

    let response = {
        biner: biner,
        result: {
            decimal: decimal,
            octal: octal,
            hexa: hexa
        }
    }

    res.json(response)
})

// Octal
app.post("/octal", (req,res) => {
    let octal = Number(req.body.octal)
    let biner = parseInt(octal,8).toString(2)
    let decimal = parseInt(octal,8).toString(10)
    let hexa = parseInt(octal,8).toString(16)

    let response = {
        octal: octal,
        result: {
            biner: biner,
            decimal: decimal,
            hexa: hexa
        }
    }

    res.json(response)
})

// Hexadecimal
app.post("/hexa", (req,res) => {
    let hexa = Number(req.body.hexa)
    let biner = parseInt(hexa,16).toString(2)
    let octal = parseInt(hexa,16).toString(8)
    let decimal = parseInt(hexa,16).toString(10)

    let response = {
        hexa: hexa,
        result: {
            biner: biner,
            octal: octal,
            decimal: decimal
        }
    }

    res.json(response)
})

// Nomor 4
// BMI
app.post("/bmi", (req,res) => {
    let tb = Number(req.body.tb)
    let bb = Number(req.body.bb)
    let bmi = bb / (tb * tb)
    let status = ""

    if (bmi <= 18.5) {
        status = "Kekurangan berat badan"
    }
    else if (bmi <= 24.9) {
        status = "Normal (ideal)"
    }
    else if (bmi <= 29.9) {
        status = "Kelebihan berat badan"
    }
    else if (bmi >= 30.0) {
        status = "Kegemukan (obesitas)"
    }

    let response = {
        berat: bb,
        tinggi: tb,
        bmi: bmi,
        status: status
    }

    res.json(response)
})