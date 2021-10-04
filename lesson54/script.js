(function () {
    'use strict';

    axios.get("http://localhost:3000/products")
    .then(res => {
        let p = document.querySelector("#euro");
        let ul = document.createElement('ul');
        ul.className = "for-lesson";
        // res.data[i].style.textTransform = "uppercase";
        // res.data[i].style.fontWeight = "bold";
        for (let i = 0; i < res.data.length; i++) {
            ul.innerHTML += `<li>altimg: ${res.data[i].altimg}</li>
                            <li>title: ${res.data[i].title}</li>
                            <li>top_ttl: ${res.data[i].top_ttl}</li>
                            <li>origin_price: ${res.data[i].origin_price}</li>
                            <li>old_price: ${res.data[i].old_price}</li>`
            
        }
        p.append(ul);
    })
}());