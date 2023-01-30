// MODEL É O RESPONSÁVEL POR MANEJAR O BANCO DE DADOS
import Sequelize, { Model } from 'sequelize';
import bcripyt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcripyt.hash(user.password, 10);
      }
    });

    return this;
  }
}

export default User;
