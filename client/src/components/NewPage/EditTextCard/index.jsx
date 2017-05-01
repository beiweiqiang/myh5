import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Done from 'material-ui/svg-icons/action/done';
import { blue500 } from 'material-ui/styles/colors';

import onClickOutside from 'react-onclickoutside';

import FontSize from './FontSize.jsx';
import ColorPick from './ColorPick.jsx';
import FontBold from './FontBold.jsx';
import TextContent from './TextContent.jsx';
import Position from './Position.jsx';

class EditTextCard extends Component {
  handleClickOutside = evt => {
    this.props.toggleTextEditCard(null);
  }
  
  render() {
    // pages, currentTextIndex, currentPage, changeFontSize, changeFontColor, fontBold, changeTextContent
    const { pages, currentTextIndex, currentPage } = this.props;
    const { changeFontSize, changeFontColor, fontBold, changeTextContent, toggleTextEditCard, changeTextPosition } = this.props;
    const { content, size, color, bold, x, y } = pages[currentPage].text[currentTextIndex];
    return (
      <Card style={{ maxWidth: '360px', padding: '0 2em 1em 2em' }}>
        <CardHeader
          title="编辑文本样式"
          style={{ paddingLeft: '0px', paddingRight: '0px', display: 'flex', alignItems: 'center' }}
          titleStyle={{ color: blue500, fontSize: '1.2em' }}
        >
          <FlatButton
            icon={<Done />}
            onTouchTap={(event) => toggleTextEditCard(null)}
          />
        </CardHeader>
        <TextContent
          content={content}
          currentTextIndex={currentTextIndex}
          currentPage={currentPage}
          changeTextContent={changeTextContent}
        />
        <FontSize
          size={size}
          currentTextIndex={currentTextIndex}
          currentPage={currentPage}
          changeFontSize={changeFontSize}
        />
        <Position
          position={{x, y}}
          currentTextIndex={currentTextIndex}
          currentPage={currentPage}
          changeTextPosition={changeTextPosition}
        />
        <FontBold
          bold={bold}
          currentTextIndex={currentTextIndex}
          currentPage={currentPage}
          fontBold={fontBold}
        />
        <ColorPick
          color={color}
          currentTextIndex={currentTextIndex}
          currentPage={currentPage}
          changeFontColor={changeFontColor}
        />
      </Card>
    );
  }
}

EditTextCard.propTypes = {
  currentPage: PropTypes.number.isRequired,
  // currentTextIndex: PropTypes.number.isRequired,

  changeFontSize: PropTypes.func.isRequired,
  changeFontColor: PropTypes.func.isRequired,
  fontBold: PropTypes.func.isRequired,
  changeTextContent: PropTypes.func.isRequired,
  toggleTextEditCard: PropTypes.func.isRequired,
};


export default onClickOutside(EditTextCard);
