import './style.css';
import { Menu } from '../../components/Menu';

export function Home() {
  
  return (
    <main >
      <Menu />
      <section>        
        <div>     
           <h1>Home</h1>   
        </div>
      </section>
    </main>

  );
};

  //aula 13
// import { Component } from 'react';
// class App extends Component{
//   render() {
//     return <h1>Hello world</h1>
//   }
// }
  // Aula 14
// import { Component } from 'react';
// class App extends Component{
//   state = {
//     name: 'Alexandre',
//     counter: 0
//   };

//   handlePClick = () => {
//     this.setState({ name: 'Zenas' });
//   }

//   handleAClick = (event) => {
//     event.preventDefault();
//     const { counter } = this.state;
//     this.setState({ counter: counter + 1 });
//   }

//   render() {
//     const { name, counter } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handlePClick}>
//             {name} {counter}
//           </p>
//           <a
//             onClick={this.handleAClick}
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Este é o link
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
  //aula 16 
// import { Component } from 'react';
// export class App extends Component{
//   state = {
//     posts: [ ] 
//   };

//   componentDidMount(){
//     this.setState({
//       posts: [
//         {
//           id: 1,
//           title:'O titulo 1',
//           body:'O corpo 1'
//         },
//         {
//           id: 2,
//           title:'O titulo 2',
//           body:'O corpo 2'
//         },
//         {
//           id: 3,
//           title:'O titulo 3',
//           body:'O corpo 3'
//         }
//       ]
//     })
//   }
//   render() {
//     const { posts } = this.state;

//     return (
//       <div className="App">
//         {posts.map(post => (
//           <div key={post.id}>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//           </div>
//           )
//         )}
//       </div>
//     );
//   }
// }

