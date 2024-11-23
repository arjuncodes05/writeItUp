import React from 'react'

function Blog() {
  return (
    <div className='bg-secondary flex p-8 justify-center'>
        <div className='w-3/6 flex flex-col gap-5'>
            <div className='text-2xl font-bold'>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit lasdka.</h1>
            </div>
            <div className='w-10/12 h-96 m-auto overflow-hidden border-y-2 p-5'>
                <img src="https://images.newscientist.com/wp-content/uploads/2022/10/13151703/sei129088618.jpg" alt="" />
            </div>

            <div className='text-justify'>
                <h1></h1>
                For weeks, I’ve been refreshing Amazon.com, searching for the perfect deal on a digital piano. My goal? To play Christmas tunes for my 17-month-old baby girl and make this holiday season extra special. Yet, every time I spot a “bargain,” I hesitate: Am I actually saving money, or am I being outsmarted by clever marketing? As a marketing professor, you’d think I’d know better. But, embarrassingly, I find myself falling victim to these tactics far too often. It's a classic case of the shoemaker without shoes.
                <br />
                <br />
                If you’ve ever felt this tug-of-war between logic and emotion while bargain hunting, you’re in good company. Black Friday has a unique way of sparking behaviors that seem completely irrational. But these reactions aren’t random; they’re deeply rooted in human psychology. So why does this annual shopping event have the power to make millions of us act as if snagging a discounted gadget is a matter of life and death? Let’s find out.
                <br />
                <br />
                First, Black Friday deals are often not actually the best discounts of the year. Many companies use algorithm-driven dynamic pricing based on consumer data, which means that some items may be priced similarly—or even lower—during other sales throughout the year. Yet, year after year, we eagerly line up outside stores at dawn or crash e-commerce servers with our frantic clicks. This isn't about logic; it's about emotion. Black Friday isn't just a shopping event; it's a psychological battleground where our instincts take over.
                <br />
                <br />
                <h1 className='text-2xl font-bold mb-2'>The Thrill and Fear of Missing Out</h1>
                Imagine this: You're eyeing a limited-edition smartwatch, and there are only "two left in stock." Your heart races, your palms sweat, and you click "Buy Now" faster than you can think. This ambiguous mix of excitement and anxiety is carefully engineered by marketers. Scarcity cues—like low stock warnings and countdown timers—create urgency, triggering our fear of missing out (FOMO). FOMO isn't just a catchy acronym; it's a psychological response rooted in loss aversion. It describes how the pain of losing an opportunity is far more powerful than the joy of gaining something.
            </div>
        </div>
    </div>
  )
}

export default Blog