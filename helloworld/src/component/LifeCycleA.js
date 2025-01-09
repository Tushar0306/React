import React, {Component} from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Tushar',
      }

      console.log('LifecycleA constructor');
    }



    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }

    // componentDidMount(){
    //     console.log('LifecycleA componentDidMount')
    // }

    changeState = () =>{
        this.setState({
            name: 'Codevolution',
        })
    }

    render(){
        console.log('LifecycleA Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;