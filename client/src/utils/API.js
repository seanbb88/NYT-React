import axios from 'axios'; 
import filterParams from './filterParams.js'; 

export default {
//get articles from NYT
    getArticles: function(params){
        return axios.get('/api/nyt', {params: filterParams(params)}); 
    },

//save article to database
    saveArticle: function(articleData){
        return axios.post('/api/articles', articleData); 
    },
//get articles from mongo
    getSavedArticles: function(){
        return axios.get('/api/articles')
    },

    deleteArticle: function(id){
        return axios.delete(`/api/articles/${id}`); 
    }


};
