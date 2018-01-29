import RXInterfaces = require('../common/Interfaces');
import React = require('react');
declare module ReactXP {

    type Text = RXInterfaces.Text;
    var Text: typeof RXInterfaces.Text;
    var createElement: typeof React.createElement;

}