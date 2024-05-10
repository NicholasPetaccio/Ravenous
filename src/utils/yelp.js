const apiKey = '7cYgVy_QDVVJVnAScYI9QGLOCFGTcn1dryPAYEy54pvBAHRY2lpzPuUhXhuzds3Ehr0DehrsIx9F3B-WEiVMWNEWaDu-pBPKY8zylYRHH2cQuqzeFyV0H3Evbqs9ZnYx';

const Yelp = {
    search(term, location, sortBy) {
        const url = `https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${sortBy}`;
        
        return fetch(url, {
            headers: {
                Authorization: `User ${apiKey}`
            }
        }).then(response => {
            if(response.ok){
                return response.json();
                }
            throw new Error('Request Failed!');
            }, networkError => console.log(networkError.message)
        ).then(jsonResponse =>{
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
}

export default Yelp;