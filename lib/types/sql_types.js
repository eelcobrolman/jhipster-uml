'use strict';

const AbstractMappedTypes = require('./abstract_mapped_types'),
    sql = require('jhipster-core').JHipsterDatabaseTypes.Types.sql;

/**
 * This class extends the Types interface to provide the SQL types supported
 * by JHipster (for MySQL, PostgreSQL, H2).
 */
const SQLTypes = module.exports = function () {
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
SQLTypes.prototype = Object.create(AbstractMappedTypes.prototype);
SQLTypes.prototype.constructor = AbstractMappedTypes;

SQLTypes.prototype.getName = function () {
  return sql;
};
