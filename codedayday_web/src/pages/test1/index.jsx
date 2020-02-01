import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ test1 }) => ({
  ...test1,
}))
export default class Test1 extends Component {
  config = {
    navigationBarTitleText: 'test1',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="test1-page">
        test1
      </View>
    )
  }
}
