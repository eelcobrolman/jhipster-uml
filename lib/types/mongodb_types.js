'use strict';

const AbstractMappedTypes = require('./abstract_mapped_types'),
    mongodb = require('jhipster-core').JHipsterDatabaseTypes.Types.mongodb;

/**
 * This class extends the Types interface to provide the MongoDB types
 * supported by JHipster.
 */
const MongoDBTypes = module.exports = function () {
  this.types = {
    String: ['required', 'minlength', 'maxlength', 'pattern'],
    Integer: ['required', 'min', 'max'],
    Long: ['required', 'min', 'max'],
    BigDecimal: ['required', 'min', 'max'],
    LocalDate: ['required'],
    ZonedDateTime: ['required'],
    Boolean: ['required'],
    Enum: ['required'],
    Blob: ['required', 'minbytes', 'maxbytes'],
    AnyBlob: ['required', 'minbytes', 'maxbytes'],
    ImageBlob: ['required', 'minbytes', 'maxbytes'],
    TextBlob: ['required', 'minbytes', 'maxbytes'],
    Float: ['required', 'min', 'max'],
    Double: ['required', 'min', 'max']
  };
};

// inheritance stuff
MongoDBTypes.prototype = Object.create(AbstractMappedTypes.prototype);
MongoDBTypes.prototype.constructor = AbstractMappedTypes;

MongoDBTypes.prototype.getName = function () {
  return mongodb;
};
