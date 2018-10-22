import React from 'react';
import Header from './Header.jsx';
import PageTitle from './PageTitle.jsx';
import TeslaImg from './TeslaImg.jsx';
import RangeList from './RangeList.jsx';
import Settings from './Settings.jsx';
import Notice from './Notice.jsx';
//var async = require('async');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [{
        name: '60',
        miles: 246,
      }, {
        name: '60D',
        miles: 250,
      }, {
        name: '75',
        miles: 297,
      }, {
        name: '75D',
        miles: 306,
      }, {
        name: '90D',
        miles: 336,
      }, {
        name: 'P100D',
        miles: 376,
      }],
      speedRange: [45, 50, 55, 60, 65, 70],//props
      tempRange: [0, 32, 50, 70, 90, 110],
      speedIndex: 2,
      tempIndex: 3,
      wheelsSize: 19,
      fanActive: true,
    };
    this.onSpeedUp = this.onSpeedUp.bind(this);
    this.onSpeedDown = this.onSpeedDown.bind(this);
    this.onTempUp = this.onTempUp.bind(this);
    this.onTempDown = this.onTempDown.bind(this);
    this.onFanChange = this.onFanChange.bind(this);
    this.onLargeWheels = this.onLargeWheels.bind(this);
    this.onSmallWheels = this.onSmallWheels.bind(this);
    this.getMileRange = this.getMileRange.bind(this);
  }

  getMileRange() {
    const {
      models,
      speedRange,
      tempRange,
      speedIndex,
      tempIndex,
      wheelsSize,
      fanActive,
    } = this.state;
    const {
      model_json
    } = this.props;
    let new_models = models;
    for (let i = 0; i < model_json.length; i++) {
      for (let item of model_json[i]) {
        if (item.temp === tempRange[tempIndex] && item.wheelsize === wheelsSize && item.ac === (
          fanActive ? "on" : "off"
          )) {
          for (let range of item.hwy) {
            (range.mph === speedRange[speedIndex]) && (new_models[i].miles = range.miles);
          }
        }

      }
    }

    // async.map(new_models,(model,setRange) =>{
    //   fetch(`./app/assets/json/model_${model.name}.json`).then((response) => {
    //         if (response.ok) {
    //           response.json().then((data) => {
    //             let fanStatus = fanActive ? "on" : "off";
    //             let mileRanges = data.filter((item) => {
    //               return item.temp === tempRange[tempIndex] && item.wheelsize === wheelsSize && item.ac === fanStatus
    //             });
    //             let mile =  mileRanges[0].hwy.filter((item) => { return item.mph === speedRange[speedIndex] });
    //             model.miles = mile[0].miles;
    //           })
    //         }
    //         else
    //           throw new Error('Network response was not ok.');
    //       })
    //       //setRange(null,model)
    // },
    // (err,results)=>{
    //   //console.log(results);
    //   //this.setState({ models: results });
    //   //return results;
    // }


    // );
    //console.log(speedIndex);
    this.setState({ models: new_models });
    //  console.log(models);
    //return new_models;
  }

  onSpeedUp() {
    const {
      speedIndex,
    } = this.state;
    (speedIndex < 5) && this.setState(
      (({ speedIndex: prevSpeedIndex }) => ({
        speedIndex: prevSpeedIndex + 1,
      })),
      () => {
        this.getMileRange();
        //const results=this.getMileRange();
        // this.setState({models: results}); 
      }

    );
    //this.getMileRange(); 
  }

  onSpeedDown() {
    const {
      speedIndex
    } = this.state;
    (speedIndex > 0) && this.setState(
      { speedIndex: speedIndex - 1 },
      () => {
        this.getMileRange();
      }
    );
  }
  onTempUp() {
    const {
      tempIndex
    } = this.state;
    (tempIndex < 5) && this.setState({
      tempIndex: tempIndex + 1,
    },
      () => {
        this.getMileRange();
      }
    );
  }

  onTempDown() {
    const {
      tempIndex
    } = this.state;
    (tempIndex > 0) && this.setState({
      tempIndex: tempIndex - 1,
    },
      () => {
        this.getMileRange();
      }
    );
  }
  onFanChange() {
    const {
      fanActive
    } = this.state;
    this.setState({
      fanActive: !fanActive,
    },
      () => {
        this.getMileRange();
      }
    );
  }

  onLargeWheels() {
    this.setState({
      wheelsSize: 21,
    },
      () => {
        this.getMileRange();
      }
    );
  }

  onSmallWheels() {
    this.setState({
      wheelsSize: 19,
    },
      () => {
        this.getMileRange();
      }
    );
  }

  render() {
    const {
      models,
      speedIndex,
      tempIndex,
      wheelsSize,
      fanActive,
      speedRange,
      tempRange
    } = this.state;
    return (
      <div className="container">
        <Header />
        <PageTitle />
        <TeslaImg
          wheelsSize={wheelsSize}
        />
        <RangeList
          models={models}
        />
        <Settings
          tempIndex={tempIndex}
          speedIndex={speedIndex}
          tempRange={tempRange}
          speedRange={speedRange}
          onSpeedUp={this.onSpeedUp}
          onSpeedDown={this.onSpeedDown}
          onTempUp={this.onTempUp}
          onTempDown={this.onTempDown}
          fanActive={fanActive}
          onFanChange={this.onFanChange}
          wheelsSize={wheelsSize}
          onLargeWheels={this.onLargeWheels}
          onSmallWheels={this.onSmallWheels}
        />
        <Notice />
      </div>
    );
  }
}

export default App;