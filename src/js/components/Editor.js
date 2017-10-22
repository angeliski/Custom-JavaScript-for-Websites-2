import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import AceEditor from 'react-ace'
import 'brace/theme/tomorrow'
import 'brace/mode/javascript'
import 'brace/snippets/javascript'
import 'brace/ext/language_tools'
import 'brace/ext/searchbox'

@inject('AppStore')
@observer
export default class Editor extends Component {
  render () {
    const { draft, source, onChangeSource } = this.props.AppStore
    return (
      <AceEditor
        mode='javascript'
        theme='tomorrow'
        value={draft || source}
        onChange={onChangeSource}
        style={{
          border: '1px solid #EBEBEB',
          margin: 0,
          height: 380,
          width: '100%',
          lineHeight: '150%'
        }}
        showGutter
        showPrintMargin
        highlightActiveLine
        wrapEnabled
        editorProps={{
          $blockScrolling: Infinity
        }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2
        }}
      />
    )
  }
}
