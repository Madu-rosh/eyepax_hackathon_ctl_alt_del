import React, { Component } from "react";
import { spinnerService, spinnerComponent } from './components/spinner.component';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import axios from 'axios';
import Post_list from "./Post_list";
 
class Main extends Component {
  constructor(props) {
    super(props);
    this.state ={
       posts: []
    }
    //this.toggleLoader = this.toggleLoader.bind(this);
  }

  toggleLoader() {
    if (spinnerService.isShowing('mySpinner')) {
      spinnerService.hide('mSpinner');
    } else {
      spinnerService.show('mSpinner');
    }
  }

  componentDidMount() {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;',
          "Access-Control-Allow-Origin": "*",
      }
    };
    axios
      .get("https://api.devrant.thusitha.site/v1/post.list",axiosConfig)
      .then(response => {
        console.log("RESPONSE RECEIVED: ", response);
        // create an array of contacts only with relevant data
        const newPosts = response.data.posts.map(c => {
          return {
            id: c.id,
            content: c.content,
            time: c.displayTime,
            commentcount: c.commentCount,
            votes: c.votes
          };
        });


        
        

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          posts: newPosts
        });
        spinnerService.hide('mSpinner');


        console.log(newState);


        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  render() {
    const posts = this.state.posts.map((content, index) => {
      return <Post_list key={index} content={content} number={index + 1}/>
    });
    return (
        <div>
          <section className="header layout--center">
            <div className="header__content layout--wrapped">
                <div className="brand">
                    <a href="/"><div className="brand__name"><span>#</span>DEVRANT</div></a>
                </div>
                <div className="profile layout--center">
                    <div className="profile__picture">
                        <svg height="36" width="36">
                            <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                        </svg>
                    </div>
                    <div className="profile__name">Elon</div>
                </div>
                
  
                <div className="join">
                    <span>Join</span>
                    <span>Sign Out</span>
                </div>
            </div>
          </section>
          <section className="main layout--center">
            <div className="main__content layout--wrapped">
              <spinnerComponent name="mSpinner">  
                <div className="loader">
                    <div className="spinner"></div>
                </div>
              </spinnerComponent>  
              <div className="post-list">{posts}</div>
            </div>
          </section>       
        </div>      
      );   
  }
}
 
export default Main;