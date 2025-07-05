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

  const {blogs, fetchBlogs, stripHTMLPreserveFormatting} = useCart();

  useEffect(() => { fetchBlogs(); }, []);

  if (blogs.length === 0) {
    return (
      <div className='empty-blogs-page'>
        <h2 style={{fontSize: '1.5rem'}}>Loading latest blogs...</h2>
      </div>
    );
  } 

  // We are just grabbing the most recent blog as long as the blogs
  // array has been populated
  const mostRecentBlog = blogs.at(0);
  
  // Formatting the date that was fetched
  const mostRecentBlogDate = new Date(mostRecentBlog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {blogs.length > 0 && (
        <div className='blog-page-container'>
          <h1 style={{fontSize: '2rem'}}>Dragon's Brew Coffee Corner</h1>
          <div>
            <div>Dragon’s Brew Cafe maintains the <a href="https://www.dragons-brew-coffee-corner.com/" target='_blank' style={{textDecoration: 'underline'}}>Dragon’s Brew Coffee Corner</a>, a blog dedicated to coffee lovers everywhere, but especially to our Dragon’s Brew customers!</div>
            <div>Here’s the latest Dragon’s Brew Coffee Corner blog post, to give you a taste (pardon the pun)!</div>
          </div>
          <hr style={{color: 'white'}} />
          <div className='blog-container'>
            <h2 style={{fontSize: '1.5rem'}}>{mostRecentBlog.title.rendered}</h2>
            <div className='blog-author-and-date-container'>
              <div>{mostRecentBlog.author_name}</div>
              <div>{mostRecentBlogDate}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: mostRecentBlog.content.rendered }} />
            {/* <div style={{ whiteSpace: 'pre-line' }}>{stripHTMLPreserveFormatting(mostRecentBlog.content.rendered)}</div> */}
            <img className='blog_image' src={mostRecentBlog.blog_image.url} alt="Blog Image" />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;