import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})
app.use(express.json());
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.post('/', (req, res) => {
    const { summ1, percent1, years1 } = req.body;
    const { authorization } = req.headers;
    let pim = percent1/100/12
    let n = years1-1
    let K = (pim*Math.pow((1+pim), n))/(Math.pow((1+pim), n)-1)
    let payment1 = Math.round(K*summ1)
    let overpayment1 = (payment1*years1) - summ1
    let total1 = payment1*years1
    
    res.send({
        payment1,
        overpayment1,
        total1,
        authorization,
    });
});

app.post('/api/getpayment2', (req, res) => {
    const { summ2, percent2, years2 } = req.body;
    const { authorization } = req.headers;
    let b = summ2*percent2*years2
    let D = 365
    let payment2 = Math.floor(b/D/100)
    let total2 = parseInt(payment2)+parseInt(summ2)
    res.send({
        payment2,
        total2,
        authorization,
    });
});
app.post('/api/getpayment3', (req, res) => {
    const { summ3, percent3, years3 } = req.body;
    const { authorization } = req.headers;
    let K = 365
    let b = summ3*(percent3/100)*years3
    let payment3 = Math.floor(b/K)
    let total3 = parseInt(payment3)+parseInt(summ3)
    res.send({
        payment3,
        total3,
        authorization,
    });
});