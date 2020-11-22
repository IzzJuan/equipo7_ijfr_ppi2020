import React, { Component } from 'react';
import '../styles/Post.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

var posts;

export default class Post extends Component {


    state = {
        posts: posts,
    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        fetch('http://localhost:4000/posts')
            .then(res => res.json())
            .then(res => res = posts)
    }



    render() {
        return (
            <div>
                <h1 className="publicaciones"></h1>
                {
                    this.state.posts.map(post => {
                        return <div className="contenedor" key={post.id_publicacion}>
                            <div className="caja">
                                <h1>{post.titulo_publicacion}</h1>
                                <p>{post.body_publicacion}</p>
                                <div className="imagen">
                                    <img src={post.img_publicacion} alt={post.id_publicacion} className="img-fluid" ></img>
                                </div>
                            </div>
                            <div className="comentario">
                                <div className="Form">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Enter your commentary" />
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            comment
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}