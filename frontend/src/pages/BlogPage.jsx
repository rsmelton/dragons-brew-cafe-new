import React, { useEffect } from 'react';
import { useCart } from '../context/AppContext';
import '../assets/styles.css';

// When I remove Chakra from the project completely I need to come back and remove the style
// prop on the h2 tags below. 
// Apparently Chakra is overriding some things when I do a global reset in the theme.js file
// One of these things is cancelling out the font size of the h2 tag amongst the other headers as well
// so here we have to manually restyle it ourselves.......

// This new code now reflects fetching blogs from my WordPress blog site. 
// We can see the endpoint I fetch from in the AppContext.jsx file which also has the url
// of the site itself in the endpoint

const BlogPage = () => {

  const {blogs, fetchBlogs, stripHTML} = useCart();

  useEffect(() => { fetchBlogs() }, []);

  if (blogs.length === 0) {
    return (
      <div className='empty-blogs-page'>
        <h2 style={{fontSize: '1.5rem'}}>No blogs as of this moment</h2>
      </div>
    );
  }

  // We are just grabbing the most recent blog as long as the blogs
  // array has been populated
  const mostRecentBlog = blogs.at(0);

  return (
    <>
      {/* {blogs.length === 0 && (
        <div className='empty-blogs-page'>
          <h2 style={{fontSize: '1.5rem'}}>No blogs as of this moment</h2>
        </div>
      )} */}

      {blogs.length > 0 && (
        <div className='blogs-container'>
          {/* <span>Check out our entire blog site <a href="https://www.dragons-brew-coffee-corner.com/">here</a></span> */}
          <h1 style={{fontSize: '2rem'}}>Blog</h1>
          <div>
            <div>Dragon’s Brew Cafe maintains the <a href="https://www.dragons-brew-coffee-corner.com/" target='_blank' style={{textDecoration: 'underline'}}>Dragon’s Brew Coffee Corner</a>, a blog dedicated to coffee lovers everywhere, but especially to our Dragon’s Brew customers!</div>
            <div>Here’s the latest Dragon’s Brew Coffee Corner blog post, to give you a taste (pardon the pun)!</div>
            {/* <hr style={{color: 'white', height: '1rem'}} /> */}
          </div>
          <hr style={{color: 'white'}} />
          <div>
            {/* <h1 style={{fontSize: '2rem'}}>The Dragon’s Brew maintains the <a href="https://www.dragons-brew-coffee-corner.com/" target='_blank' style={{textDecoration: 'underline'}}>Dragon’s Brew Coffee Corner</a>, a blog dedicated to coffee lovers everywhere, but especially to our Dragon’s Brew customers!</h1>
            <h1 style={{fontSize: '2rem'}}>Here’s the latest Dragon’s Brew Coffee Corner blog post, to give you a taste (pardon the pun)!</h1> */}
            <h2 style={{fontSize: '1.5rem'}}>{stripHTML(mostRecentBlog.title.rendered)}</h2>
            <div>{stripHTML(mostRecentBlog.content.rendered)}</div>
          </div>
          {/* <span>Check out our entire blog site <a href="https://www.dragons-brew-coffee-corner.com/" target='_blank' style={{textDecoration: 'underline'}}>here</a></span> */}
          {/* <a href="">Check out our entire blog site here</a> */}
          {/* {blogs.map((blog) => (
            <div>
              <h2 style={{fontSize: '1.5rem'}}>{stripHTML(blog.title.rendered)}</h2>
              <div>{stripHTML(blog.content.rendered)}</div>
            </div>
          ))} */}
        </div>
      )}
    </>
    // <>
    //   <p>Name: Robert Melton</p>
    //   <p>Review: ⭐️⭐️⭐️⭐️⭐️</p>
    //   <p className='review-paragraph-padding-bottom'>Dragon's Brew is my go-to spot for a perfect cup of coffee! The ambiance is cozy with just the right touch of dragon-themed decor that adds a whimsical charm. The baristas are friendly and knowledgeable, always recommending new blends to try. Their Dragon's Fire Latte is my favorite; it's rich and smooth, perfect for starting my day right!</p>
    //   <p>Name: Deondre North</p>
    //   <p>Review: ⭐️⭐️⭐️⭐️⭐️</p>
    //   <p className='review-paragraph-padding-bottom'>What a gem! Dragon's Brew not only serves amazing coffee but also creates a welcoming atmosphere that feels like a home away from home. The moment you step in, you're greeted with the aroma of freshly ground beans and a smile from the staff. I love their attention to detail, from the unique dragon art on the walls to the carefully curated menu. Whether you're in for a quick espresso or a leisurely afternoon latte, this place delivers excellence every time.</p>
    //   <p>Name: Brandon Jones</p>
    //   <p>Review: ⭐️⭐️⭐️⭐️⭐️</p>
    //   <p className='review-paragraph-padding-bottom'>Dragon's Brew has quickly become my favorite coffee haunt in town. The quality of their coffee is unmatched, sourced from the best beans and expertly brewed to perfection. It's evident that they care about the craft, as each cup is consistently delicious. Beyond the coffee, the staff here truly makes the experience exceptional. They're not just baristas; they're passionate about coffee and always willing to share their knowledge. Whether you're a coffee aficionado or simply enjoy a good cup, Dragon's Brew is a must-visit!</p>
    // </>
  );
};

export default BlogPage;