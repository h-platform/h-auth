module.exports = function(config){
  return [
    require('./getRecordController')(config),
    require('./getRecordsController')(config),
    require('./queryRecordController')(config),
    require('./queryRecordsController')(config),
    require('./saveRecordController')(config),
    require('./deleteRecordController')(config),
  ];
};
