'use strict';

const expect = require('chai').expect,
    fail = expect.fail,
    ParserFactory = require('../../lib/editors/parser_factory');

describe('StarUMLParser', () => {
  describe('when passing a valid diagram', () => {
    describe('taken from the HR example', () => {
      var parserData = ParserFactory.createParser({
        file: './test/xmi/staruml.xmi',
        databaseType: 'sql'
      });
      var parser = parserData.parser;
      var parsedData = parser.parse(parserData.data);

      it('parses it', () => {
        expect(parsedData).not.to.be.null;
      });
      it('correctly parses the JobHistory class', () => {
        var jobHistory = parsedData.classes['AAAAAAFXsAF0YJyk7Ow='];
        expect(jobHistory.name).to.eq('JobHistory');
        expect(jobHistory.tableName).to.eq('job_history');
        expect(jobHistory.fields).to.deep.eq([
          'AAAAAAFXsAnOeJzPIXc=',
          'AAAAAAFXsAnsIZzW3v0='
        ]);
        expect(jobHistory.comment).to.eq('');
        expect(jobHistory.dto).to.eq('no');
        expect(jobHistory.pagination).to.eq('no');
        expect(jobHistory.service).to.eq('no');
      });
      it('correctly parses the Job class', () => {
        var job = parsedData.classes['AAAAAAFXsA2wFJzg0ek='];
        expect(job.name).to.eq('Job');
        expect(job.tableName).to.eq('job');
        expect(job.fields).to.deep.eq([
          'AAAAAAFXsA3dKp0KDtI=',
          'AAAAAAFXsA4Y350SXMw=',
          'AAAAAAFXsA8+n50aGK4=',
          'AAAAAAFXsA+F+Z0iFEo='
        ]);
        expect(job.comment).to.eq('');
        expect(job.dto).to.eq('no');
        expect(job.pagination).to.eq('no');
        expect(job.service).to.eq('no');
      });
      it('correctly parses the Department class', () => {
        var department = parsedData.classes['AAAAAAFXsBLzYJ62JyQ='];
        expect(department.name).to.eq('Department');
        expect(department.tableName).to.eq('department');
        expect(department.fields).to.deep.eq([
          'AAAAAAFXsBMwnp8h/Qc=',
          'AAAAAAFXsBOMbJ9rhBM='
        ]);
        expect(department.comment).to.eq('');
        expect(department.dto).to.eq('no');
        expect(department.pagination).to.eq('no');
        expect(department.service).to.eq('no');
      });
      it('correctly parses the Employee class', () => {
        var employee = parsedData.classes['AAAAAAFXsCO1HqDDYas='];
        expect(employee.name).to.eq('Employee');
        expect(employee.tableName).to.eq('employee');
        expect(employee.fields).to.deep.eq([
          'AAAAAAFXsCWwL6FahKk=',
          'AAAAAAFXsCXpjaHggZ8=',
          'AAAAAAFXsCb+rKLqsgs=',
          'AAAAAAFXsCda2aNkfAQ=',
          'AAAAAAFXsCgpvF/G2aA=',
          'AAAAAAFXsCmrZGBe8Ok=',
          'AAAAAAFXsCru5WDkGs0=',
          'AAAAAAFXsCstFmFecjA='
        ]);
        expect(employee.comment).to.eq('');
        expect(employee.dto).to.eq('no');
        expect(employee.pagination).to.eq('no');
        expect(employee.service).to.eq('no');
      });
      it('correctly parses the Location class', () => {
        var location = parsedData.classes['AAAAAAFXsDbNKXc03Nc='];
        expect(location.name).to.eq('Location');
        expect(location.tableName).to.eq('location');
        expect(location.fields).to.deep.eq([
          'AAAAAAFXsDbzd3jZ2jk=',
          'AAAAAAFXsDgC/3qvMrY=',
          'AAAAAAFXsDhEI3yFoMM=',
          'AAAAAAFXsDh7e34cxs0=',
          'AAAAAAFXsDiuon+zFD8='
        ]);
        expect(location.comment).to.eq('');
        expect(location.dto).to.eq('no');
        expect(location.pagination).to.eq('no');
        expect(location.service).to.eq('no');
      });
      it('correctly parses the Country class', () => {
        var country = parsedData.classes['AAAAAAFXsDlYyYSgfF4='];
        expect(country.name).to.eq('Country');
        expect(country.tableName).to.eq('country');
        expect(country.fields).to.deep.eq([
          'AAAAAAFXsDmCh4Z7AzU=',
          'AAAAAAFXsDmzMYhL6fU='
        ]);
        expect(country.comment).to.eq('');
        expect(country.dto).to.eq('no');
        expect(country.pagination).to.eq('no');
        expect(country.service).to.eq('no');
      });
      it('correctly parses the Region class', () => {
        var region = parsedData.classes['AAAAAAFXsDrg/JAALKU='];
        expect(region.name).to.eq('Region');
        expect(region.tableName).to.eq('region');
        expect(region.fields).to.deep.eq([
          'AAAAAAFXsDsCupG/Ssg=',
          'AAAAAAFXsDtOfJQ1OMI='
        ]);
        expect(region.comment).to.eq('');
        expect(region.dto).to.eq('no');
        expect(region.pagination).to.eq('no');
        expect(region.service).to.eq('no');
      });
      it('correctly parses the Task class', () => {
        var task = parsedData.classes['AAAAAAFXsDPfJGifF2c='];
        expect(task.name).to.eq('Task');
        expect(task.tableName).to.eq('task');
        expect(task.fields).to.deep.eq([
          'AAAAAAFXsDQHlWlfSPo=',
          'AAAAAAFXsDQ/AmqiMCo=',
          'AAAAAAFXsDR+sGupEDs='
        ]);
        expect(task.comment).to.eq('');
        expect(task.dto).to.eq('no');
        expect(task.pagination).to.eq('no');
        expect(task.service).to.eq('no');
      });
      it('correctly adds the class names', () => {
        expect(parsedData.classNames).to.deep.eq([
          'JobHistory',
          'Job',
          'Department',
          'Employee',
          'Location',
          'Country',
          'Region',
          'Task'
        ]);
      });
    });
  });
});
