import React, { Component } from 'react';
import MainFeatured from './mainFeaturedPosts.js';
import { makeStyles } from '@material-ui/core/styles';
import Featured from './featuredPosts.js'
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
       display: 'flex',
       marginTop: 10,
       overflow: 'auto'

    }
}
const mainFeaturedPost = {
    title: 'Microsoft Imagine Cup 2021',
    description:
      "IC 2021 is Microsoft's featured hackathon.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
      },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
export default class Spotlight extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
              <div className="row align-items-center justify-content-center">
                  <h1 className="display-7 typing-main heading">
                      What's on feed?
                  </h1>
              </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xs-10 justify-content-center align-items-center">
                        <MainFeatured post={mainFeaturedPost}/>
                    </div>
                </div>
                <br/>
                <div className="row align-items-center justify-content-center">
                    <Grid style={styles.root} container spacing={6}>
                        {featuredPosts.map((post) => (
                        <Featured key={post.title} post={post} />
                        ))}
                    </Grid>
                </div>
            </div>
        )
        
    }
    
}