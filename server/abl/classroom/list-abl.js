const path = require("path");
const ClassroomDao = require("../../dao/classroom-dao");
let dao = new ClassroomDao(
  path.join(__dirname, "..", "..", "storage", "classrooms.json")
);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function ListAbl(req, res) {
  try {
    await sleep(2000);
    const classroomList = await dao.listClassrooms();
    res.json(classroomList);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

module.exports = ListAbl;
