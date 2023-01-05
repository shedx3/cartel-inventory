const AccessControl = require("accesscontrol");
const ac = AccessControl();

const acctRole = ac
  .grant("accountant")
  .readOwn("profile")
  .updateAny("thrift")
  .readAny("thrift");
const adminRoles = ac
  .grant("admin")
  .extend("accountant")
  .readAny("profile")
  .updateAny("profile")
  .deleteAny("profile");
