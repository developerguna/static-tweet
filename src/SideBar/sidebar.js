import React from 'react';
import ProfileCard from '../ProfileCard/app';
import './sidebar.css';
class Layout extends React.Component {
    state = { showSidebar: false }
    toggleSidebar = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    }
    render() {
        const { showSidebar } = this.state;
        return (
           
            <div className="layout" id="sidebar">
                {showSidebar &&
                    <Sidebar
                        onHide={this.toggleSidebar}>
                            <section>=></section>
                        <ProfileCard />
                    </Sidebar>
                }
                <Content
                    isSidebarVisible={showSidebar}
                    onShowSidebar={this.toggleSidebar}>
                </Content>

            </div>
        )
    }
}


const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
    <div className="sidebarcontent">

        {!isSidebarVisible && (
            <button onClick={onShowSidebar}>
                Show Profile Card
            </button>
        )}
    </div>
);

const Sidebar = ({ onHide, children }) => (


    <div className="sidebar">
        <aside>

            <button className="sidebarbtn" onClick={onHide}>
                Hide
    </button>

        </aside>
        <article> {children}</article>
    </div>


);

export default Layout;