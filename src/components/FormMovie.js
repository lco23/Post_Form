import React, { Component } from 'react'
import axios from 'axios'


 class FormMovie extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             "title": "",
             "poster": "",
             "comment": "",
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
//Un champ texte pour saisir le nom du film
//Un champ texte pour saisir une URL correspondant au poster du film
//Un champ textarea permettant de saisir un commentaire
onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';

    axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
          alert(`Film ajouté ${res.id} !`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur lors de la saisie : ${e.message}`);
        });
  }

    render() {
        return (
            <div>
                <div className="FormMovie">
                  <h1>Ton film préféré</h1>

                  <form onSubmit={this.submitForm}>
                    <fieldset>
                      <legend>Informations</legend>
                      <div className="form-data">
                        <label htmlFor="title">Nom du film :</label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          onChange={this.onChange}
                          value={this.state.title}
                        />
                      </div>

                      <div className="form-data">
                        <label htmlFor="poster">URL :</label>
                        <input
                          type="text"
                          id="poster"
                          name="poster"
                          onChange={this.onChange}
                          value={this.state.poster}
                        />
                      </div>

                      <div className="form-data">
                        <label htmlFor="comment">Ton commentaire :</label>
                        <input
                          type="tetarea"
                          id="comment"
                          name="comment"
                          onChange={this.onChange}
                          value={this.state.comment}
                        />
                      </div>
                      <hr />
                      <div className="form-data">
                        <input type="submit" value="Envoyer" />
                      </div>
                    </fieldset>
                  </form>
                </div>
                
            </div>
        )
    }
}

export default FormMovie
