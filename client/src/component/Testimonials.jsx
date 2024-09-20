// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
    {
        name: 'Batuk Dev',
        role: 'Farmer from Uttar Pradesh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEzGHtog_Eukzk_atDoaO-AFt_eeskWttiw&usqp=CAU',
        quote: [
            'I have been using this new irrigation system for a year now, and it has significantly improved my crop yield. The system is easy to set up and requires very little maintenance.',
            'The customer service team is also very responsive, and they helped me whenever I needed assistance.',
            'I highly recommend this product to other farmers who want to increase efficiency and reduce water waste."'
        ],
        title: 'Improved crop yield with minimal effort'
    },
    {
        name: 'Sarah Johnson',
        role: 'Organic Farmer from Gujarat',
        image: 'data:image/jpeg;base64,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',
        quote: [
            'I switched to organic fertilizers, and I\'m amazed at how healthy my crops look this season. The soil has improved drastically, and my vegetables are thriving.',
            'The organic fertilizers are easy to apply, and I love that they are environmentally friendly."'
        ],
        title: 'Healthy crops with organic fertilizers'
    },
    {
        name: 'Ahmed Ali',
        role: 'Rice Farmer from Punjab',
        image: 'https://www.shutterstock.com/image-photo/happy-indian-farmer-standing-agriculture-260nw-2237896487.jpg',
        quote: [
            'This new pest control method saved my rice fields from infestation without harming the environment. I\'ve seen a 30% increase in my yield since I started using it.',
            'It\'s cost-effective and safe for my family and workers."'
        ],
        title: 'Pest control that boosts yield'
    },
    {
        name: 'Sharal Dev',
        role: 'Dairy Farmer from Bihar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnia0KgTgWrb4ob89IWikpg9ODa5gjSS5iYXP2q13GasKgOgrd2UU2clvVaPqVi4K4TPw&usqp=CAU',
        quote: [
            'The automated milking system has transformed our dairy operation. It\'s efficient and allows us to produce more milk with less effort.',
            'The cows are also more relaxed, and we\'ve seen a noticeable increase in milk quality."'
        ],
        title: 'Efficient dairy farming with automation'
    }
];

const Testimonials = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Farmer Reviews</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Hear what farmers from around the world have to say about our products and solutions.
                    </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <figure key={index} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.title}</h3>
                                {testimonial.quote.map((line, i) => (
                                    <p key={i} className="my-4">{line}</p>
                                ))}
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src={testimonial.image} alt="profile picture" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>{testimonial.name}</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <div className="text-center">
                    <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Show more...
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
