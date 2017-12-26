import React, { Component } from 'react';
import Key from './Key';

export default class Keyboard extends Component {
  render() {
  // for better readability of Key components - shorter lines
    const keyClick = this.props.keyClick;
    const x = <span>&#x1D4B3;</span>;
    const inv = <sup>-1</sup>;
    const pow2 = <sup>2</sup>;
    const pow3 = <sup>3</sup>;

    return (
      <div>
        <div className="keyboard-row">
          <Key  Tag={[x, pow2]} keyLog="^2" math="sqr" keyClick={keyClick} />
          <Key  className="sqrt" Tag="&radic;x" keyLog="&radic;(" math="sqrt" keyClick={keyClick} />
          <Key className="expo"  Tag="^" keyLog="^" math="power" keyClick={keyClick} />
          <Key  className="btnClear" Tag="CLEAR" math="clear" keyClick={keyClick} />
        </div>
       
        <div className="keyboard-row">
          <Key className="expo" keyLog="&Pi;" Tag="π" math="pi" keyClick={keyClick} />
          <Key  keyLog="(" Tag="(" math="prnths" keyClick={keyClick} />
          <Key  keyLog=")" Tag=")" math="prnths" keyClick={keyClick} />
          <Key Tag="&divide;" keyLog="&divide;" math="divide" keyClick={keyClick} />
        </div>
        <div className="keyboard-row key-css">
          <Key Tag="7" keyLog="7" math="number" keyClick={keyClick} />
          <Key Tag="8" keyLog="8" math="number" keyClick={keyClick} />
          <Key Tag="9" keyLog="9" math="number" keyClick={keyClick} />
          <Key Tag="&times;" keyLog="&times;" math="multiply" keyClick={keyClick} />
        </div>
        <div className="keyboard-row key-css">
          <Key Tag="4" keyLog="4" math="number" keyClick={keyClick} />
          <Key Tag="5" keyLog="5" math="number"keyClick={keyClick} />
          <Key Tag="6" keyLog="6" math="number"keyClick={keyClick} />
          <Key Tag="&minus;" keyLog="-" math="subtract" keyClick={keyClick} />
        </div>
        <div className="keyboard-row key-css">
          <Key Tag="1" keyLog="1" math="number" keyClick={keyClick} />
          <Key Tag="2" keyLog="2" math="number" keyClick={keyClick} />
          <Key Tag="3" keyLog="3" math="number" keyClick={keyClick} />
          <Key Tag="+" keyLog="+" math="sum" keyClick={keyClick} />
        </div>
        <div className="keyboard-row key-css">
          <Key Tag="0" keyLog="0" math="log" keyClick={keyClick} />
          <Key Tag="." keyLog="." math="comma" keyClick={keyClick} />
          <Key keyLog="-" Tag="(&minus;)" math="sub" keyClick={keyClick} />
          <Key Tag="=" math="equals" keyClick={keyClick} />
        </div>
      </div>
    );
  }
}

