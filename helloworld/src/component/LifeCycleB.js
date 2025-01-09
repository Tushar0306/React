import React, {Component} from 'react';

class LifeCycleB extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas',
      }

      console.log('LifecycleB constructor');
    }


 
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }

    // componentDidMount(){
    //     console.log('LifecycleB componentDidMount')
    // }

    render(){
        console.log('LifecycleB Render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB;