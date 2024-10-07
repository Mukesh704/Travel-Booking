import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToshow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Amazing experience! The team customized our trip exactly to our preferences, handling all the details flawlessly. From hotels to activities, everything was perfect. It made our vacation stress-free and truly unforgettable!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Snow</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Unforgettable adventure! The travel agency crafted a unique itinerary that perfectly matched our interests. Every moment was filled with excitement, and the personal touches made our experience even more special. Highly recommend them!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Jose Mourinho</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Impeccable service! The team listened to our needs and delivered a personalized tour that was nothing short of perfect. Every aspect was thoughtfully arranged, ensuring we had an incredible and memorable experience!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lea Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

    </Slider>
  )
}

export default Testimonials