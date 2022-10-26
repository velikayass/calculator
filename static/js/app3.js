var el = document.getElementById('submit3');
el.addEventListener('click', (e) => {
        e.preventDefault();
        let summ3 = document.getElementById('summ3').value
        let percent3 = document.getElementById('percent3').value
        let years3 = parseInt(document.getElementById('years3').value)
        fetch('/api/getpayment3', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer abcdxyz',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summ3,
                percent3,
                years3,
            }),
        })
        .then(async (response) => {
            let res = await response.json();
            document.getElementById('payment3').innerHTML = res.payment3;
            document.getElementById('total3').innerHTML = res.total3;
        })
    });