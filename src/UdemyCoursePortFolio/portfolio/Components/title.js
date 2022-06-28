import React ,{Component} from 'react';
 const portfolioTitles = [
    "a software engineer",
    "a music lover",
    "an enthusiastic learner",
    "an adventure seeker",
     
 ];

 class PortfolioTitle extends Component
 {
    state = { titleIndex: 0, fadeIn: true };
    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
      }

      componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
      }
      animateTitles = () => {
        this.titleInterval = setInterval(() => {
          const titleIndex = (this.state.titleIndex + 1) % portfolioTitles.length;
    
          this.setState({ titleIndex, fadeIn: true });
    
          this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
      };
     render()
     {
        const { fadeIn, titleIndex } = this.state;

        const title = portfolioTitles[titleIndex];
         return(
<p id="portfoliotitle" className={fadeIn ? "title-fade-in" : "title-fade-out"}>I am {title}</p>
         );
     }
 }
 export default PortfolioTitle;