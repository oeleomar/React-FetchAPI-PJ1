import React from "react";
import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts/indes";
import { loadPost } from "../../utils/loadPost";
import { Button } from '../../components/Button';
import {TextInput} from '../../components/TextInput';

//Pode ser feito com classes:

export class Home extends Component {
  state = {
    allPosts: [],
    posts: [],
    page: 0,
    postsPerPages: 10,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadMorePosts = () => {
    const {page, postsPerPages, allPosts, posts} = this.state;
    const nextPage = page + postsPerPages;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPages)
    posts.push(...nextPosts);
    this.setState({posts, page:nextPage})
  }

  loadPosts = async () => {
    const {page, postsPerPages} = this.state
    const postsAndPhotos = await loadPost();
    this.setState({
      allPosts: postsAndPhotos,
      posts: postsAndPhotos.slice(page, postsPerPages),
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({searchValue: value})
  }

  render() {
    const { posts, page, allPosts, postsPerPages, searchValue } = this.state;
    const noMorePosts = page + postsPerPages >= allPosts.length;

    const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;

    return (
      <section className="container">

        <div className="search-container">
          {!!searchValue && (<h1>Search Value: {searchValue}</h1>)}

          <TextInput handleChange={this.handleChange} searchValue={searchValue}/>
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não exitem posts =(</p>
        )}


        <div className="button-container">
          {!searchValue && (
            <Button
              text='Um texto qualquer'
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>

      </section>
    );
  }
}

