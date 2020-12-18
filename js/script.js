jQuery(document).ready(function ($) {

    const request = axios.get('http://csc225.mockable.io/consoles');
    request.then(function (response) {
        const Consolename = response.data;
        const ConsoleHtml = Consolename.map(function (em) {

            const { id, name: Consolename } = em;

            return `
    
                <div data-id="${id}" class="media my-4 hover-background-gray cursor-pointer">
                    <img src="data:image/png;base64,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" class="mr-3" alt="Photo of ${Consolename}">
                    <div class="media-body">
                        <h5 class="mt-0">${Consolename}</h5>
                   
                    </div>
                </div>
    
            `;
        }).join('');

        $('#Console').html(ConsoleHtml);


    });

    jQuery('#Console').on('click', '.media', function () {
        const id = $(this).attr('data-id');
        const ConsoleUrl = `http://csc225.mockable.io/consoles/${id}`;

        $('#Consoles').html('');
        $('#loading-animation').toggleClass('d-none');

        axios.get(ConsoleUrl).then(function (response) {
            $('#loading-animation').toggleClass('d-none');
            const { id, name, price, country, releaseYear, image } = response.data;
            $('#Consoles').html(
                `
                <div class="card" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="Photo of ${name}">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Product: ${name}</li>
                            <li class="list-group-item">Price: ${price}</li>
                            <li class="list-group-item">Country: ${country}</li>
                            <li class="list-group-item">Release year: ${releaseYear}</li>
                        </ul>
                    </div>
                </div>
             
            `);
        }).catch(function (error) {
            alert('error!!!');
        });
    });






});