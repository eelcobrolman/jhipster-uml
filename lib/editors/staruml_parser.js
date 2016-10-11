'use strict';

const _ = require('lodash'),
    ParsedData = require('../data/parsed_data'),
    parser_helper = require('./parser_helper'),
    cardinalities = require('../cardinalities'),
    checkForReservedClassName = require('../utils/jhipster_utils').checkForReservedClassName,
    checkForReservedTableName = require('../utils/jhipster_utils').checkForReservedTableName,
    checkForReservedFieldName = require('../utils/jhipster_utils').checkForReservedFieldName,
    buildException = require('../exceptions/exception_factory').buildException,
    exceptions = require('../exceptions/exception_factory').exceptions;

var root;
var databaseTypes;
var rawObjects;
var parsedData;
var noUserManagement;

module.exports = {
  parse: parse
};

function parse(args) {
  initParser(args);
  findElements();
  fillTypes();
  return parsedData;
}

function initParser(args) {
  if (!args.root || !args.databaseTypes) {
    throw new buildException(
      exceptions.NullPointer,
      'The root object and the database types must be passed.');
  }
  root = args.root;
  databaseTypes = args.databaseTypes;
  noUserManagement = args.noUserManagement || false;
  rawObjects = {
    rawTypesIndexes: [],
    rawEnumsIndexes: [],
    rawClassesIndexes: [],
    rawAssociationsIndexes: [],
    rawValidationRulesIndexes: []
  };
  parsedData = new ParsedData();
}

function findElements() {
  for (let i = 0; i < root.packagedElement.length; i++) {
    let element = root.packagedElement[i];
    switch (element.$['xmi:type']) {
    case 'uml:PrimitiveType':
    case 'uml:DataType':
      rawObjects.rawTypesIndexes.push(i);
      break;
    case 'uml:Enumeration':
      rawObjects.rawEnumsIndexes.push(i);
      break;
    case 'uml:Class':
      rawObjects.rawClassesIndexes.push(i);
      break;
    case 'uml:Association':
      rawObjects.rawAssociationsIndexes.push(i);
      break;
    default:
    }
  }
}

function fillTypes() {
  for (let i = 0; i < rawObjects.rawTypesIndexes.length; i++) {
    addType(root.packagedElement[rawObjects.rawTypesIndexes[i]]);
  }
}

function addType(typeElement) {
  if (!typeElement.$) {
    typeElement = {
      $: {
        'xmi:id': typeElement,
        name: typeElement
      }
    };
  }
  if (!databaseTypes.contains(_.upperFirst(typeElement.$.name))) {
    throw new buildException(
        exceptions.WrongType,
        `The type '${typeElement.$.name}' isn't supported by JHipster.`);
  }
  parsedData.addType(typeElement.$['xmi:id'], {name: _.upperFirst(typeElement.$.name)});
}
