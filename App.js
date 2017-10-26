/**
 * Ant-DesignDemp
 * https://github.com/guangqiang-liu
 * @guangqiang
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import { Button, NoticeBar, SearchBar, SegmentedControl} from 'antd-mobile'

export default class App extends Component<{}> {
  state = {
    value: '',
  }

  onScrollChange = (value) => {
    console.log(value)
  }

  handleClick = () => {
    this.manualFocusInst.focus()
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => this.clear(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => this.clear('onCancel')}
          showCancelButton
          onChange={this.onChange}
        />
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor={'#ff0000'}
          style={{ height: 40, width: 250 }}
        />
        <NoticeBar marqueeProps={{ loop: true, style: { padding: 10 } }}>
          Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
        </NoticeBar>
        <Button>Start</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})