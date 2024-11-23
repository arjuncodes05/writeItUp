import React from 'react'

function Intro() {
  return (
    <section className='lg:p-8 p-4 lg:h-96 h-[auto] bg-primary flex justify-center text-justify items-center'>
        <div className="sm:w-3/4">
            <blockquote className='text-center text-2xl font-bold mb-8'>
            "Knowledge increases by sharing, not by saving." 
            <br />
            <span className='text-lg font-normal'>– Kamal Jain</span>
            </blockquote>
            <p>
            <b>Welcome to WriteItUp</b> , your go-to space for ideas, inspiration, and connection! This open platform invites everyone to share their stories, insights, and creativity freely. Whether you’re here to explore engaging topics, learn something new, or publish your own blogs, we’ve got something for you. 
            <br />
            <br />
            Our mission is to bring together diverse perspectives, spark curiosity, and build a vibrant community of readers and writers. With a wide variety of posts, meaningful conversations, and endless opportunities to express yourself, this is your space to thrive. Start reading or contribute your voice today—let’s explore, learn, and grow together!
            </p>
        </div>
    </section>
  )
}

export default Intro