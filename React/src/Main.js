import React, { Component } from "react";
import { spinnerService, SpinnerComponent as Spinner } from './components/spinner.component';
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
    this.toggleLoader = this.toggleLoader.bind(this);
  }

  toggleLoader() {
    if (spinnerService.isShowing('mySpinner')) {
      spinnerService.hide('mySpinner');
    } else {
      spinnerService.show('mySpinner');
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


        console.log(newState);


        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  render() {
    var posts = this.state.posts.map(function(content, i){
      return (
      <article className="post">
        <div className="post__inner">
            <div className="score">
                <div className="score__up layout--center">++</div>
                <div className="score__board layout--center">{content.votes}</div>
                <div className="score__down layout--center">--</div>
            </div>
            <div className="post__body">
            {content.content}</div>
        </div>
        <div className="post__footer">
            <div className="post__time">{content.time}</div>
            <div className="post__comments">
                <svg className="icon" viewBox="0 0 31 32">
                    <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                    0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                    8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                    3.922-2.61 7.23-6.186 8.294z"></path>
                </svg>
                {content.commentcount}
            </div>
        </div>
      </article>);
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
              <div className="post-list">{posts}</div>
            </div>
          </section>       
        </div>      
      );   
  }
}
 
export default Main;