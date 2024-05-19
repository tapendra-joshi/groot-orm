

module.exports = class UsersMigration1627578971655 {
    async up(queryRunner) {
		await queryRunner.query(`CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "settingId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_dcf9861e9037e6e0f27cb5d3ec" UNIQUE ("settingId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
		await queryRunner.query(`CREATE INDEX "IDX_USER_EMAIL" ON "users" ("email") `);
		await queryRunner.query(`CREATE TABLE "settings" ("id" SERIAL NOT NULL, "isNotificationEnabled" boolean NOT NULL, "isNewDashboardEnabled" boolean NOT NULL, "timezone" character varying NOT NULL, CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`);
		await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_dcf9861e9037e6e0f27cb5d3ecd" FOREIGN KEY ("settingId") REFERENCES "settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      }
  
    async down(queryRunner) {
		await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_dcf9861e9037e6e0f27cb5d3ecd"`);
        await queryRunner.query(`DROP TABLE "settings"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_USER_EMAIL"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
  };