    // LESSON 50
    (function () {
        'use strict';
        const req = new Promise((resolve, reject) => {

            const data = {
                first: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
                second: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
            };

            resolve(data);

        });

        req.then(data => {
            setTimeout(() => {
                let tag = document.createElement('script'),
                    tag2 = document.createElement('script');
                tag.src = data.first;
                tag2.src = data.second;
                document.head.appendChild(tag);
                document.head.appendChild(tag2);
            }, 5000);
        });


        // console.log('Zaparos dannyh...');

        // const req = new Promise((resolve, reject) => {

        //     setTimeout(() => {
        //         console.log('Obrabotka dannyh');

        //         const data = {
        //             name: 'Product',
        //             price: 5000
        //         };
        //         resolve(data);
        //         reject();
        //     }, 1500);

        // });

        // req.then(data => {
        //     return new Promise((resolve, reject) => {

        //         setTimeout(() => {
        //             data.status = 'order';
        //             resolve(data);
        //         }, 2000);

        //     });
        // }).then(data => {
        //     data.modify = 'Modify';
        //     return data;
        // }).then(data => {
        //     console.log(data);
        // }).catch(() => {
        //     console.log("Error data!");
        // }).finally(() => {

        //     console.log("Clear data!");
        
        // });

        // const test = time => {
        //     return new Promise(resolve => {
        //         setTimeout(() => resolve(), time);
        //     });
        // };

        // test(1000).then(() => console.log('Time 1000ms'));
        // test(1000).then(() => console.log('Time 2000ms'));

        // Promise.all([test(1000), test(2000)]).then(() => {
        //     console.log('all done!');
        // });

    //     Promise.race([test(1000), test(2000)]).then(() => {
    //         console.log('all done!');
    //     });

    }());
    // ////