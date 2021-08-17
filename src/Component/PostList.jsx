import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment';

class PostList extends Component {
  constructor(props) {
    super(props);
 //alert('dev');
    
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios.get("https://technoace.in/blog/wp-json/wp/v2/posts?_embed&offset=1&filter[orderby]=date&order=asc").then(posts => {
      this.setState({
        posts: posts.data

      });
    });
  }

  createMarkup(html) {
    return { __html: html };
  }


  render() {
      
     //dat = new date(post.date);


    return (
      <div>
        {this.state.posts.map(post => (
          <Link to={`/${post.slug}`} key={post.id}>

<div class="col-md-6 col-sm-6 col-xs-12 padding-manage" key={post.id}>
<div class="thumbnail blog-com-part">

<div class="col-md-2 col-sm-12 col-xs-12 blog-left-sec" > 

      

    <h3>{moment(post.date).format("DD")}</h3>
    <h5>{ moment(post.date).format("MM") }</h5>
    <p>{ moment(post.date).format("YYYY") }</p>
  </div>
  <div class="col-md-10 col-sm-12 col-xs-12 blog-right-sec">
    <div class="blog-img-comm"> 
     
    <img src={post._embedded['wp:featuredmedia'][0].source_url}   className="img-responsive" height={400} width={650} />
 
    { /*<span class="blog-date"><a href="#" rel="category tag">category</a></span>*/}
    </div>
    <h2><a href={post.link} title="" rel="bookmark" target="_blank"> {post.title.rendered} </a></h2>
    <ul class="blog-coment-part">
          <li> <i class="fa fa-tags" aria-hidden="true"></i>
                  <a href="#" rel="category tag">{post.tags} Tags</a>                      
          </li>
          
      
      <li> <a href="javascript:void(0)"> <i class="fa fa-comments-o" aria-hidden="true"></i>
        <p>Comments</p>
        </a> </li>
    </ul>
    
    <p>{post._embedded.author[0].name}</p>
    <a class="redbtn newbtn arrowrgt" href={post.link}  title="" rel="bookmark" target="_blank"> Read more </a>
   
  </div>

</div>
</div>


            {/*<div
                  dangerouslySetInnerHTML={this.createMarkup(
                    post.content.rendered
                  )}
                  />*/}
             
       




          </Link>
        ))}
      </div>
    );
  }
}

export default PostList;