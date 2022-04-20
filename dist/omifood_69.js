const test = [
    
    {
        img: "img/customers/dave.jpg",
        text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
        name: "Dave Bryson"
    },
    {
        img: "img/customers/ben.jpg",
        text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
        name: "Ben Hadley"
    },
    {
        img: "img/customers/steve.jpg",
        text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
        name: "Steve Miller"
    },
    {
        img: "img/customers/hannah.jpg",
        text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
        name: "Hannah Smith"
    }
]
const gallery = [
    
    {
        img: "img/gallery/gallery-1.jpg"
    },
    {
        img: "img/gallery/gallery-2.jpg"
    },
    {
        img: "img/gallery/gallery-3.jpg"
    },
    {
        img: "img/gallery/gallery-4.jpg"
    },
    {
        img: "img/gallery/gallery-5.jpg"
    },
    {
        img: "img/gallery/gallery-6.jpg"
    },
    {
        img: "img/gallery/gallery-7.jpg"
    },
    {
        img: "img/gallery/gallery-8.jpg"
    },
    {
        img: "img/gallery/gallery-9.jpg"
    },
    {
        img: "img/gallery/gallery-10.jpg"
    },
    {
        img: "img/gallery/gallery-11.jpg"
    },
    {
        img: "img/gallery/gallery-12.jpg"
    }
]



const showtest = () => {
    const testimonialArray = test.map( item => {
        return (
            `<figure class="testimonial">
                <img
                class="testimonial-img"
                alt="Photo of customer Hannah Smith"
                src="${item.img}"
                />
                <blockquote class="testimonial-text">
                ${item.text}
                </blockquote>
                <p class="testimonial-name">&mdash; ${item.name}</p>
            </figure>`
        )
    })
    const content = testimonialArray.join('')
    testDiv.innerHTML = content
}

showtest();

const showGallery = () => {
    const galleryArray = gallery.map( item => {
        return (
            `
                <figure class="gallery-item">
                    <img
                    src="${item.img}"
                    alt="Photo of beautifully
                    arranged food"
                    />
                </figure>
            `
        )
    })

    const content = galleryArray.join('')

    galleryDiv.innerHTML = content
}   
showGallery();

const testDiv = document.querySelector('.test');
const galleryDiv = document.querySelector('.gallery');


