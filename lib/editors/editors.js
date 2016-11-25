'use strict';

const ModelioParser = require('./modelio_parser'),
    GenMyModelParser = require('./genmymodel_parser'),
    UMLDesignerParser = require('./umldesigner_parser'),
    StarUMLParser = require('./staruml_parser');

module.exports = {
  MODELIO: 'modelio',
  UMLDESIGNER: 'umldesigner',
  GENMYMODEL: 'genmymodel',
  STARUML: 'staruml',
  Parsers: {
    modelio: ModelioParser,
    umldesigner: UMLDesignerParser,
    genmymodel: GenMyModelParser,
    staruml: StarUMLParser
  },
  UndetectedEditors: [
    'umldesigner'
  ]
};
