const pool = require("../config/db");

const jobsModel = {
  async allJobs(title = "", loc = "") {
    let sql = `SELECT id, label, subtitle, description, location, image, created_at FROM jobs`;
    const params = [];
    const conditions = [];
    if (title) {
      conditions.push(
        `(label LIKE ? OR subtitle LIKE ? OR description LIKE ?)`
      );
      params.push(`%${title}%`, `%${title}%`, `%${title}%`);
    }

    if (loc) {
      conditions.push(`( location LIKE ?)`);
      params.push(`%${loc}%`);
    }

    if (conditions.length > 0) {
      sql += ` WHERE ` + conditions.join(" AND ");
    }
    sql += ` ORDER BY created_at DESC`;
    console.log(sql, params);
    const [rows] = await pool.execute(sql, params);
    return rows;
  },
};

module.exports = jobsModel;
