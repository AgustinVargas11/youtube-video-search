import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

// plug in your api key here
const API_KEY = null;


class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.videoSearch('React JS');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term,
        }, videos => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }

    render() {

        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));