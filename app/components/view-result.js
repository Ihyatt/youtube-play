import Ember from 'ember';

export default Ember.Component.extend({
    newData: null, 
    videos: Ember.computed('newData', function(){
        return this.get('newData');
    }),
    actions: {
        'youTubeSearch'(){
            let query = this.get('query');
            let request = gapi.client.youtube.search.list({
                q: query,
                part: 'snippet', 
                maxResults: 10
            })
            request.execute((response) => {
                this.set('newData', response.result.items)
            })

        }
    }
});

