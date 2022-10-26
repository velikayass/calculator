var el = document.getElementById('submit2');
el.addEventListener('click', (e) => {
        e.preventDefault();
        let summ2 = document.getElementById('summ2').value
        let percent2 = document.getElementById('percent2').value
        let years2 = parseInt(document.getElementById('years2').value)
        fetch('/api/getpayment2', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer abcdxyz',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summ2,
                percent2,
                years2,
            }),
        })
        .then(async (response) => {
            let res = await response.json();
            document.getElementById('payment2').innerHTML = res.payment2;
            document.getElementById('total2').innerHTML = res.total2;
        })
    });