module.exports.successResponse = (status, error, message, result) => {
  return { status, error, message, result };
};
module.exports.errorResponse = (sts = 501, error, msg = " SERVER  ERROR ") => {
  return { status: sts, error, message: msg };
};
module.exports.successPageResponse = (status, error, message, totalCount, totalPage, whichPage, result) => {
  return { status, error, message, totalCount, totalPage, whichPage, result };
};