var el = document.getElementById('submit1');
el.addEventListener('click', (e) => {
        e.preventDefault();
        let summ1 = document.getElementById('summ1').value
        let percent1 = document.getElementById('percent1').value
        let years1 = document.getElementById('years1').value;
        fetch('/', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer abcdxyz',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summ1,
                percent1,
                years1,
            }),
        })
        .then(async (response) => {
            let res = await response.json();
            document.getElementById('payment1').innerHTML = res.payment1;
            document.getElementById('overpayment').innerHTML = res.overpayment1;
            document.getElementById('total1').innerHTML = res.total1;
        })
    });