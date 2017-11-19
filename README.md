# react-native-ant-design-demo
reactNative中接入蚂蚁金服Ant-Design组件库

# 前言
> 前段时间在做自己的开源react-native项目中使用到了蚂蚁金服的开源组件库：`Ant Design Mobile`，今天咱们就简单介绍下这个组件库如何接入和使用。

**Ant Design官方定义：**
> Ant Design 是一个致力于提升『用户』和『设计者』使用体验的中台设计语言。它模糊了产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色边界，将进行 UE 设计和 UI 设计人员统称为『设计者』，利用统一的规范进行设计赋能，全面提高中台产品体验和研发效率。

**antd-mobile官方定义：**
> antd-mobile is the React implementation of the Ant Design's mobile specification, serving the ant and koubei wireless service.

*直接查看官方文档[请点击](https://mobile.ant.design/docs/react/introduce#Applicable-Scenes)*

*查看官方Git仓库[请点击](https://github.com/ant-design/ant-design)*

*当然，Ant-Design组件库分为web端和手机端，web端为antd，手机端为antd-mobile。我们在开发RN项目时，使用的是手机端组件库。*

# 如何接入
> 接入antd-mobile组件库只需要简单的几步即可完成，相对来说还是比较简单的。

* 确保你已近有可以正常运行的react环境和react-native项目，如果没有项目创建一个新的demo项目即可。
* `$ npm install antd-mobile --save`

**注意：当你install完成之后，在重新运行程序，可能会报下面的错误：(没有报错误的同学们请忽略！)**

![react-dom报错](http://upload-images.jianshu.io/upload_images/6342050-3cbe9fe4b7128d14.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*根据错误提示，发现我们的项目中缺少`react-dom`这个模块，我们执行`npm install react-dom --save`即可。*

* `npm install babel-plugin-import --save-dev`

* 在项目跟目录下找到`.babelrc`文件,然后使用文本编辑工具打开，添加这样一行代码` "plugins": [["import", { "libraryName": "antd-mobile" `，然后保存退出。

![babelrc](http://upload-images.jianshu.io/upload_images/6342050-a543a978d167ca72.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**.babelrc文件内容如下：**

```
{
  "plugins": [["import", { "libraryName": "antd-mobile" }]],
  "presets": ["react-native"]
}

```

# 如何使用
> antd-mobile 组件的使用也是相当的简单，和使用rn原生的组价没有什么太大的区别。这里我们就随便找了三个组件演示。

**如果想直接运行demo查看效果[请点击](https://github.com/guangqiang-liu/react-native-ant-design-demo)**

**先看作者的Demo项目效果图：**

![demo](http://upload-images.jianshu.io/upload_images/6342050-0e877c2db860278d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**使用步骤**

* import { Button } from 'antd-mobile'

* ``` return (<Button>这是Ant-D的一个按钮组件，使用方式简单吧。</Button>) ```

**Demo工程实例代码**

```
/**
 * Ant-designDemo
 * 作者Git：https://github.com/guangqiang-liu
 * 技术交流群：620792950
 * 作者QQ：1126756952
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
```

# 注意事项
> * 在深入学习研究Ant Design React之前，需要了解一些 ES5、ES6的常用语法知识。
> * 确保你的Node.js环境：Node.js(> v4.x)
