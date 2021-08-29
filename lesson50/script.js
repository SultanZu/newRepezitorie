    // LESSON 50

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
        }, 1000);
    });
    // ////