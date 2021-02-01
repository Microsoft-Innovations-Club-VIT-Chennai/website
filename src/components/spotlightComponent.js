import React, { Component } from 'react';
import MainFeatured from './mainFeaturedPosts.js';
import Featured from './featuredPosts.js'
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
       display: 'flex',
       marginTop: 10,
       overflow: 'auto'

    }
};

const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
      link: '#',
      linkText:'Continue...'
    },
    
  ];
export default class Spotlight extends Component{
    render(){
        if(this.props.data){
            var featured = this.props.data.featured;
            var spotlight = this.props.data.spotlight;
        }
        return(
            <div className="spotlight-component container">
              <div className="row align-items-center justify-content-center">
                  <h1 className="spotlight-header display-7 typing-main heading">
                      What's on feed?
                  </h1>
              </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xs-10 justify-content-center align-items-center">
                        <MainFeatured post={featured}/>
                    </div>
                </div>
                <br/>
                <div className="row align-items-center justify-content-center">
                    <Grid style={styles.root} container spacing={6}>
                        {spotlight.info.map((post) => (
                        <Featured key={post.title} post={post} />
                        ))}
                    </Grid>
                </div>
            </div>
        )
        
    }
    
}